export function slugify(value = '') {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function titleize(value = '') {
  const titled = String(value)
    .trim()
    .toLowerCase()
    .replace(/\b[a-z]/g, (letter) => letter.toUpperCase());

  return titled.replace(/\b(Cbse|Icse|Evs|Gk|Ict|Ai|Ib)\b/g, (match) => match.toUpperCase());
}
