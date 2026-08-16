import { useEffect, useState } from 'react';
import { fetchCurriculum } from '../services/api.js';

export function useCurriculum() {
  const [state, setState] = useState({ data: [], loading: true, error: null });

  useEffect(() => {
    let mounted = true;
    fetchCurriculum()
      .then(({ data }) => {
        const items = Array.isArray(data?.items) ? data.items : [];
        const normalized = items
          .filter((curriculum) => ['cbse', 'icse'].includes(curriculum.slug))
          .map((curriculum) => ({
            ...curriculum,
            grades: Array.isArray(curriculum.grades)
              ? curriculum.grades.filter((grade) => Array.isArray(grade.subjects) && grade.subjects.length)
              : []
          }))
          .filter((curriculum) => curriculum.grades.length);

        if (mounted) setState({ data: normalized, loading: false, error: null });
      })
      .catch((error) => {
        if (mounted) setState({ data: [], loading: false, error });
      });
    return () => {
      mounted = false;
    };
  }, []);

  return state;
}
