import { Github, Twitter, Figma, Linkedin } from 'lucide-react';

// Import all available logos
import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';

// New technology logos
import LogoPython from '/public/images/logos/icon-python.svg';
import LogoJava from '/public/images/logos/icon-java.png';
import LogoC from '/public/images/logos/icon-c.svg';
import LogoPyTorch from '/public/images/logos/icon-pytorch.png';
import LogoTensorflow from '/public/images/logos/icon-tensorflow.png';
import LogoMatlab from '/public/images/logos/icon-matlab.png';
import LogoDeepLabCut from '/public/images/logos/icon-deeplabcut.svg';

// Company logos
import LogoCaltech from '/public/images/logos/logo-caltech.svg';
import LogoClearView from '/public/images/logos/logo-clearview.svg';
import LogoVeritas from '/public/images/logos/logo-veritas.svg';

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
    url: 'https://linkedin.com/in/katelyn-sadorf-1b77a0194',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Python',
    logo: LogoReact, // Using React as placeholder for Python
    url: 'https://www.python.org/',
  },
  {
    label: 'Java',
    logo: LogoJava,
    url: 'https://www.java.com/',
  },
  {
    label: 'C',
    logo: LogoC,
    url: 'https://en.cppreference.com/w/c',
  },
  {
    label: 'PyTorch',
    logo: LogoPyTorch,
    url: 'https://pytorch.org/',
  },
  {
    label: 'Tensorflow',
    logo: LogoTensorflow,
    url: 'https://www.tensorflow.org/',
  },
  {
    label: 'Matlab',
    logo: LogoMatlab,
    url: 'https://www.mathworks.com/products/matlab.html',
  },
  {
    label: 'DeepLabCut',
    logo: LogoDeepLabCut,
    url: 'https://github.com/DeepLabCut/DeepLabCut',
  },
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
    logo: LogoCaltech,
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
    logo: LogoClearView,
    logoAlt: 'Clear View Social logo',
    position: 'Software Engineer',
    startDate: new Date(2023, 5),
    endDate: new Date(2023, 10),
    summary: [
      'Designed and implemented frontend components (HTML, CSS, React.js).',
      'Developed dynamic UIs with GraphQL APIs.',
      'Received return offer.',
    ],
  },
  {
    logo: LogoVeritas,
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
    url: 'https://acrobat.adobe.com/id/urn:aaid:sc:US:00dc86eb-28a7-4983-afca-29185c966505',
    previewImage: '', // No image for now
    technologies: [
      'Python',
      'Data Analysis',
      'Research Design',
      'Laboratory Techniques',
    ],
  },
];
