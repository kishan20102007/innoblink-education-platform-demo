import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import xlsx from 'xlsx';
import { slugify, titleize } from '../utils/slug.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const defaultWorkbookPath = path.resolve(__dirname, '../../data/Subjects curriculum wise.xlsx');
const allowedCurricula = new Set(['CBSE', 'ICSE']);
const knownCurricula = new Set(['CBSE', 'ICSE', 'IGCSE', 'IB']);
let cached = null;
let cachedMtime = null;

function workbookPath() {
  return process.env.CURRICULUM_XLSX_PATH || defaultWorkbookPath;
}

function isCurriculum(value) {
  return knownCurricula.has(String(value || '').trim().toUpperCase());
}

function isGrade(value) {
  return /^grade\s+\d+$/i.test(String(value || '').trim());
}

function compactCells(row) {
  return row.map((cell) => (cell == null ? '' : String(cell).trim())).filter(Boolean);
}

function normalizeCurriculum(items) {
  return items
    .map((curriculum) => ({
      ...curriculum,
      grades: curriculum.grades
        .reduce((grades, grade) => {
          const existing = grades.find((item) => item.slug === grade.slug);
          if (!existing) {
            grades.push({
              ...grade,
              subjects: [...grade.subjects]
            });
            return grades;
          }

          const subjectSlugs = new Set(existing.subjects.map((subject) => subject.slug));
          for (const subject of grade.subjects) {
            if (!subjectSlugs.has(subject.slug)) {
              existing.subjects.push(subject);
              subjectSlugs.add(subject.slug);
            }
          }
          return grades;
        }, [])
        .sort((a, b) => Number(a.slug.replace('grade-', '')) - Number(b.slug.replace('grade-', '')))
    }))
    .filter((curriculum) => curriculum.grades.length);
}

function parseWorkbook(filePath) {
  if (!fs.existsSync(filePath)) {
    console.warn(`Curricula workbook not found at ${filePath}`);
    return [];
  }

  const workbook = xlsx.readFile(filePath);
  const buckets = new Map();

  for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    const rows = xlsx.utils.sheet_to_json(sheet, { header: 1, defval: '' });
    let currentCurriculum = null;

    for (const row of rows) {
      const cells = compactCells(row);
      if (!cells.length) continue;

      let gradeIndex = cells.findIndex(isGrade);
      const firstCell = cells[0].toUpperCase();

      if (isCurriculum(firstCell)) currentCurriculum = firstCell;
      if (!currentCurriculum || !allowedCurricula.has(currentCurriculum) || gradeIndex === -1) continue;

      const gradeRaw = cells[gradeIndex];
      const subjects = cells.slice(gradeIndex + 1).filter((subject) => subject && !isGrade(subject));
      if (!subjects.length) continue;

      if (!buckets.has(currentCurriculum)) {
        buckets.set(currentCurriculum, {
          curriculum: currentCurriculum,
          slug: slugify(currentCurriculum),
          grades: []
        });
      }

      buckets.get(currentCurriculum).grades.push({
        grade: titleize(gradeRaw),
        rawGrade: gradeRaw,
        slug: slugify(gradeRaw),
        subjects: [...new Set(subjects)].map((subject) => ({
          name: titleize(subject),
          rawName: subject,
          slug: slugify(subject)
        }))
      });
    }
  }

  return normalizeCurriculum(Array.from(buckets.values()));
}

export function getCurriculumData() {
  const filePath = workbookPath();
  const stat = fs.existsSync(filePath) ? fs.statSync(filePath) : null;
  const mtime = stat?.mtimeMs || 0;

  if (!cached || cachedMtime !== mtime) {
    cached = parseWorkbook(filePath);
    cachedMtime = mtime;
  }

  return cached;
}

export function findSubjectCourse(curriculumSlug, gradeSlug, subjectSlug) {
  const curriculum = getCurriculumData().find((item) => item.slug === slugify(curriculumSlug));
  const grade = curriculum?.grades.find((item) => item.slug === slugify(gradeSlug));
  const subject = grade?.subjects.find((item) => item.slug === slugify(subjectSlug));
  if (!curriculum || !grade || !subject) return null;
  return { curriculum, grade, subject };
}
