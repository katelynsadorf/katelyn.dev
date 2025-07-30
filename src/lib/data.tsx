import { Github, Twitter, Figma, Linkedin } from 'lucide-react';

// Only import logos that actually exist
import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/katelynsadorf',
  GITHUB_REPO: 'https://github.com/katelynsadorf/katelynsadorf.com',
  TWITTER: 'https://twitter.com/katelynsadorf',
  FIGMA: 'https://www.figma.com/@katelynsadorf',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Projects',
    href: '#work',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/katelynsadorf',
  },
  {
    icon: Linkedin,
    url: 'https://linkedin.com/in/katelynsadorf',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoReact, // Using React logo as placeholder for Caltech
    logoAlt: 'Caltech logo',
    position: 'Undergraduate Researcher',
    startDate: new Date(2023, 1),
    currentlyWorkHere: true,
    summary: [
      'Research on subcortical circuits and behavioral experiments (Manhattan Maze).',
      'Data processing with Python scripts and analysis.',
      'Selected as Bristol-Myers SURF Fellow.',
    ],
  },
  {
    logo: LogoNodejs, // Using Node.js logo as placeholder for Clear View
    logoAlt: 'Clear View Social logo',
    position: 'Full Stack Developer',
    startDate: new Date(2023, 5),
    endDate: new Date(2023, 10),
    summary: [
      'Designed and implemented frontend components (HTML, CSS, React.js).',
      'Developed dynamic UIs with GraphQL APIs.',
      'Received return offer.',
    ],
  },
  {
    logo: LogoFigma, // Using Figma logo as placeholder for Veritas
    logoAlt: 'Veritas AI logo',
    position: 'AI Scholar Program',
    startDate: new Date(2022, 11),
    endDate: new Date(2023, 1),
    summary: [
      'Weekly meetings with students to explore machine learning in Python.',
      'Built a robust CNN for image classification on CIFAR-10.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'This website!',
    description:
      'Built from scratch to share my experience, research, and creative work in one accessible place.',
    url: 'https://katelynsadorf.com',
    previewImage: '', // No image for now
    technologies: [
      'React',
      'Node.js',
      'Javascript',
      'Figma',
      'Vite',
      'Tailwindcss',
      'Git',
    ],
  },
  {
    name: 'Independent Zebrafish Larvae Research',
    description:
      'Designed and conducted a zebrafish T maze assay to study how melatonin and dopamine affect memory retention, revealing dose-dependent cognitive effects.',
    url: '#',
    previewImage: '', // No image for now
    technologies: [
      'Python',
      'Data Analysis',
      'Research Design',
      'Laboratory Techniques',
    ],
  },
];
