const commonBenefits = [
  'Live 1:1 customised classes',
  'Certified and verified tutors',
  'Complimentary assessment practice',
  'Flexible global scheduling',
  'Parent progress updates'
];

export const cambridgeCourses = [
  {
    slug: 'cambridge-primary',
    category: 'Cambridge Courses',
    title: 'Cambridge Primary',
    subtitle: 'Ages 5 to 11 | Grades 1 to 5',
    overview:
      'A strong foundation programme that builds English, mathematics, science, digital literacy and confidence through inquiry-led tutoring.',
    subjects: ['English', 'Mathematics', 'Science', 'Global Perspectives', 'ICT'],
    syllabus: ['Diagnostic baseline', 'Concept development', 'Skill practice', 'Monthly mastery review'],
    benefits: commonBenefits
  },
  {
    slug: 'cambridge-secondary',
    category: 'Cambridge Courses',
    title: 'Cambridge Lower Secondary',
    subtitle: 'Ages 11 to 14 | Grades 6 to 8',
    overview:
      'A bridge programme for students preparing for IGCSE readiness with structured academic habits and subject confidence.',
    subjects: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Hindi', 'French', 'Geography', 'History'],
    syllabus: ['Foundation strengthening', 'Topic-wise practice', 'Analytical writing', 'Exam readiness'],
    benefits: commonBenefits
  },
  {
    slug: 'cambridge-igcse',
    category: 'Cambridge Courses',
    title: 'Cambridge IGCSE',
    subtitle: 'Ages 14 to 16 | Grades 9 and 10',
    overview:
      'Exam-aligned IGCSE tutoring across core and extended subjects with focused past-paper strategy and revision discipline.',
    subjects: ['ENGLISH LANGUAGE', 'ENGLISH LITERATURE', 'MATHEMATICS', 'PHYSICS', 'BIOLOGY', 'CHEMISTRY', 'BUSINESS STUDIES', 'COMPUTER SCIENCE', 'ECONOMICS', 'ENVIRONMETAL MANAGEMENT', 'GEOGRAPHY', 'HISTORY', 'FRENCH', 'HINDI', 'ARABIC'],
    syllabus: ['Syllabus mapping', 'Paper pattern training', 'Past paper practice', 'Grade improvement plan'],
    benefits: commonBenefits
  },
  {
    slug: 'cambridge-o-level',
    category: 'Cambridge Courses',
    title: 'Cambridge O Level',
    subtitle: 'Ages 16 to 18 |  Grades 11 to 12',
    overview:
      'Personalised O Level tutoring for global learners needing structured content mastery and confidence before final exams.',
    subjects: ['ENGLISH LANGUAGE', 'MATHEMATICS', 'APPLIED MATHEMATICS', 'PHYSICS', 'BIOLOGY', 'CHEMISTRY', 'COMPUTER SCIENCE', ' ECONOMICS', ' BUSINESS STUDIES', '	ACCOUNTING', '	PHYSIOLOGY', 'SOCIOLGY', 'ENVIRONMENTAL MANAGEMENT', 'GEOGRAPHY', '	HISTORY', 'GLOBAL PERSPECTIVE & RESEARCH', 'ARABIC', 'FRENCH', 'HINDI'],
    syllabus: ['Core topic clarity', 'Doubt resolution', 'Mock tests', 'Exam technique'],
    benefits: commonBenefits
  },
  {
    slug: 'cambridge-as-a-level',
    category: 'Cambridge Courses',
    title: 'Cambridge AS & A Level',
    subtitle: 'Ages 16 to 19 | Grades 11 and 12',
    overview:
      'Advanced subject mentoring for university readiness, deep concepts, structured problem solving and high-stakes exam preparation.',
    subjects: ['ENGLISH LANGUAGE', 'MATHEMATICS', 'APPLIED MATHEMATICS', 'PHYSICS', 'BIOLOGY', 'CHEMISTRY', 'COMPUTER SCIENCE', ' ECONOMICS', ' BUSINESS STUDIES', '	ACCOUNTING', '	PHYSIOLOGY', 'SOCIOLGY', 'ENVIRONMENTAL MANAGEMENT', 'GEOGRAPHY', '	HISTORY', 'GLOBAL PERSPECTIVE & RESEARCH', 'ARABIC', 'FRENCH', 'HINDI'],
    syllabus: ['Advanced concept coaching', 'Structured assignments', 'Topical tests', 'University-aligned preparation'],
    benefits: commonBenefits
  }
];

export const ibCourses = [
  {
    slug: 'ib-pyp',
    category: 'IB Courses',
    title: 'IB Primary Years Programme',
    subtitle: 'Ages 3 to 12',
    overview:
      'Inquiry-led PYP support that develops curiosity, communication and foundational skills through personalised learning.',
    subjects: ['Language', 'Mathematics', 'Science', 'Social Studies', 'Arts', 'Personal Education'],
    syllabus: ['Inquiry units', 'Skill routines', 'Reflective learning', 'Parent feedback'],
    benefits: commonBenefits
  },
  {
    slug: 'ib-myp',
    category: 'IB Courses',
    title: 'IB Middle Years Programme',
    subtitle: 'Ages 11 to 16',
    overview:
      'MYP tutoring that connects concepts, criteria-based assessment and independent learning habits across subject groups.',
    subjects: ['Language & Literature', 'Individuals & Societies', 'Sciences', 'Mathematics', 'Design'],
    syllabus: ['Criterion understanding', 'Concept mapping', 'Project support', 'Assessment preparation'],
    benefits: commonBenefits
  },
  {
    slug: 'ib-dp',
    category: 'IB Courses',
    title: 'IB Diploma Programme',
    subtitle: 'Ages 16 to 19',
    overview:
      'Premium DP mentoring for HL/SL subjects, IA support, exam technique, TOK-aligned thinking and disciplined revision.',
    subjects: ['Math AA/AI', 'Physics', 'Chemistry', 'Biology', 'Economics', 'Business Management', 'English'],
    syllabus: ['HL/SL planning', 'IA guidance', 'Past-paper drills', 'Assessment calendar'],
    benefits: commonBenefits
  },
  {
    slug: 'ib-ap-advanced-program',
    category: 'IB Courses',
    title: 'AP (Advanced Program)',
    subtitle: 'Advanced school learners | Grades 9 to 12',
    overview:
      'An advanced academic pathway for ambitious learners who need deeper subject preparation, stronger analytical skills, structured mentoring and exam-oriented practice.',
    subjects: ['Advanced Mathematics', 'Physics', 'Chemistry', 'Biology', 'Economics', 'English', 'Computer Science'],
    syllabus: ['Advanced concept mapping', 'Subject specification review', 'Application-based practice', 'Assessment strategy', 'Learning outcome tracking'],
    benefits: [
      'Advanced subject mentoring',
      'Structured learning outcomes',
      'Exam and project readiness',
      'One-on-one academic support',
      'Clear parent progress communication'
    ]
  }
];

export const otherCourses = [
  {
    slug: 'coding-ai',
    category: 'Other Courses',
    title: 'Coding & AI Basics',
    subtitle: 'Future-ready technology skills',
    overview:
      'Hands-on coding, logic, Python, web fundamentals and AI literacy for school students building modern digital confidence.',
    subjects: ['Scratch', 'Python', 'Web Basics', 'AI Literacy', 'Project Building'],
    syllabus: ['Logic and algorithms', 'Guided projects', 'Portfolio tasks', 'Presentation practice'],
    benefits: commonBenefits
  },
  {
    slug: 'spoken-english',
    category: 'Other Courses',
    title: 'Spoken English',
    subtitle: 'Communication and fluency training',
    overview:
      'Structured English fluency coaching for students who need confidence in school, interviews, presentations and global communication.',
    subjects: ['Grammar', 'Pronunciation', 'Conversation', 'Public Speaking', 'Writing'],
    syllabus: ['Fluency baseline', 'Daily speaking drills', 'Vocabulary building', 'Confidence sessions'],
    benefits: commonBenefits
  },
  {
    slug: 'olympiad-competitive',
    category: 'Other Courses',
    title: 'Olympiad & Competitive Courses',
    subtitle: 'Advanced preparation for ambitious learners',
    overview:
      'Targeted Olympiad, AP, Edexcel, OCR, AQA, CBSE and ICSE preparation with exam-focused practice and mentoring.',
    subjects: ['Math Olympiad', 'Science Olympiad', 'AP', 'Edexcel', 'OCR', 'AQA', 'CBSE', 'ICSE'],
    syllabus: ['Advanced problem solving', 'Timed practice', 'Mock reviews', 'Performance tracking'],
    benefits: commonBenefits
  },
  {
    slug: 'skill-development',
    category: 'Other Courses',
    title: 'Skill Development',
    subtitle: 'Confidence, creativity and academic habits',
    overview:
      'A practical skill track for study habits, digital productivity, presentation, critical thinking and learner independence.',
    subjects: ['Study Skills', 'Critical Thinking', 'Presentation', 'Digital Productivity', 'Research'],
    syllabus: ['Habit audit', 'Learning systems', 'Guided application', 'Progress review'],
    benefits: commonBenefits
  },
  {
    slug: 'robotics',
    category: 'Other Courses',
    title: 'Robotics',
    subtitle: 'STEM, coding and automation projects',
    overview:
      'A hands-on robotics pathway from beginner fundamentals to advanced project building, blending STEM concepts, coding integration, AI basics and real-world automation.',
    subjects: ['STEM Learning', 'Practical Robotics', 'Coding Integration', 'AI Basics', 'Automation', 'Project Design'],
    syllabus: ['Robotics foundations', 'Sensors and movement', 'Coding controlled builds', 'Real-world project challenges', 'AI and automation basics'],
    benefits: [
      'Beginner to advanced learning levels',
      'Real-world projects and demonstrations',
      'Problem-solving and design thinking',
      'Coding, STEM and automation integration',
      'Flexible online mentoring'
    ]
  }
];

export const allCourses = [...cambridgeCourses, ...ibCourses, ...otherCourses];

export const navCourseGroups = [
  { label: 'Cambridge Courses', items: cambridgeCourses },
  { label: 'IB Courses', items: ibCourses },
  { label: 'Other Courses', items: otherCourses }
];
