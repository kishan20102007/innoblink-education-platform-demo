import { cambridgeCourses, ibCourses } from '../data/courses.js';

export const courseCategoryOptions = ['CBSE', 'ICSE', 'Cambridge', 'IB', 'Other Courses'];

const subjectLabel = (subject) => subject?.subject || subject?.name || subject?.title || subject;

const otherCourseGroups = [
  {
    value: 'Robotics',
    label: 'Robotics',
    subjects: []
  },
  {
    value: 'Coding',
    label: 'Coding',
    subjects: ['Scratch', 'Python', 'Web Basics', 'Project Building']
  },
  {
    value: 'AI Basics',
    label: 'AI Basics',
    subjects: ['AI Literacy', 'Prompt Basics', 'Automation Basics', 'Responsible AI']
  }
];

export function getCourseSelection(course, curriculaData = []) {
  if (['CBSE', 'ICSE'].includes(course)) {
    const curricula = curriculaData.find((item) => item.curriculum === course || item.slug === course.toLowerCase());
    return {
      levelLabel: 'Select grade',
      levels:
        curricula?.grades?.map((grade) => ({
          value: grade.grade,
          label: grade.grade,
          subjects: (grade.subjects || []).map(subjectLabel).filter(Boolean)
        })) || []
    };
  }

  if (course === 'Cambridge') {
    return {
      levelLabel: 'Select level',
      levels: cambridgeCourses.map((item) => ({
        value: item.title,
        label: item.title.replace('Cambridge ', ''),
        subjects: item.subjects || []
      }))
    };
  }

  if (course === 'IB') {
    return {
      levelLabel: 'Select program',
      levels: ibCourses.map((item) => ({
        value: item.title,
        label: item.title.replace('IB ', ''),
        subjects: item.subjects || []
      }))
    };
  }

  if (course === 'Other Courses') {
    return {
      levelLabel: 'Select course',
      levels: otherCourseGroups
    };
  }

  return { levelLabel: 'Select grade', levels: [] };
}

export function getSelectedSubjects(course, level, curriculaData = []) {
  const selection = getCourseSelection(course, curriculaData);
  return selection.levels.find((item) => item.value === level)?.subjects || [];
}

export function buildTutorSelectionGroups(curriculaData = []) {
  const indianGroups = ['CBSE', 'ICSE'].map((course) => {
    const selection = getCourseSelection(course, curriculaData);
    return {
      key: course,
      label: course,
      levels: selection.levels.map((level) => ({
        ...level,
        value: `${course} - ${level.value}`,
        subjects: level.subjects.map((subject) => `${course} - ${level.label} - ${subject}`)
      }))
    };
  });

  return [
    ...indianGroups,
    {
      key: 'Cambridge',
      label: 'Cambridge',
      levels: getCourseSelection('Cambridge').levels.map((level) => ({
        ...level,
        value: `Cambridge - ${level.value}`,
        subjects: level.subjects.map((subject) => `Cambridge - ${level.label} - ${subject}`)
      }))
    },
    {
      key: 'IB',
      label: 'IB',
      levels: getCourseSelection('IB').levels.map((level) => ({
        ...level,
        value: `IB - ${level.value}`,
        subjects: level.subjects.map((subject) => `IB - ${level.label} - ${subject}`)
      }))
    },
    {
      key: 'Other Courses',
      label: 'Other Courses',
      levels: otherCourseGroups.map((level) => ({
        ...level,
        value: `Other Courses - ${level.value}`,
        subjects: (level.subjects.length ? level.subjects : [level.label]).map((subject) => `Other Courses - ${level.label} - ${subject}`)
      }))
    }
  ].filter((group) => group.levels.length);
}
