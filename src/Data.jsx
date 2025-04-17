import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';
import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';
import skillsImg1 from './assets/html-logo.svg';
import skillsImg2 from './assets/css-logo.svg';
import skillsImg3 from './assets/javascript-logo.svg';
import skillsImg4 from './assets/react-logo.svg';
import skillsImg5 from './assets/tailwind-css-logo.svg';

import skillsImg6 from '../src/assets/java-logo-svgrepo-com.svg';
import skillsImg7 from './assets/python-svgrepo-com.svg';
import skillsImg8 from './assets/dbs-mysql-svgrepo-com.svg';
import skillsImg9 from './assets/hibernate-svgrepo-com.svg';
import skillsImg10 from './assets/spring-boot-svgrepo-com.svg';

import projectImg1 from './assets/project-1.jpg';
import projectImg2 from './assets/project-2.jpg';
import projectImg3 from './assets/project-3.jpg';
import projectImg4 from './assets/project-4.jpg';
import projectImg5 from './assets/project-5.jpg';

import Theme1 from './assets/red.png';
import Theme2 from './assets/blueviolet.png';
import Theme3 from './assets/blue.png';
import Theme4 from './assets/magenta.png';
import Theme5 from './assets/yellowgreen.png';
import Theme6 from './assets/orange.png';
import Theme7 from './assets/yellow.png';


export const links = [
  {
    name: 'Home',
    icon: <FaHome className='nav-icon' />,
    path: '/',
  },

  {
    name: 'About',
    icon: <FaUser className='nav-icon' />,
    path: '/about',
  },

  {
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav-icon' />,
    path: '/portfolio',
  },

  {
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav-icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    title: 'First Name : ',
    description: 'Yashwanth',
  },

  {
    title: 'Last Name : ',
    description: 'A',
  },

  {
    title: 'Age : ',
    description: '22 Years',
  },

  {
    title: 'Nationality : ',
    description: 'India',
  },

  {
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    title: 'Address : ',
    description: 'India, Bengaluru',
  },

  {
    title: 'Phone : ',
    description: '+91 7676475325',
  },

  {
    title: 'Email : ',
    description: 'yashwanthashwath@gmail.com',
  },

  {
    title: 'Date of Birth : ',
    description: '14-09-2002',
  },

  {
    title: 'Langages : ',
    description: 'English, Hindi, Kannada,',
  },
];

export const stats = [
  {
    no: '0-1+',
    title: 'Years of <br /> Experience',
  },

  {
    no: '04+',
    title: 'Completed <br /> Projects',
  },

  {
    no: '0',
    title: 'Happy <br /> Customers',
  },

  {
    no: '0',
    title: ' Awards <br /> Won',
  },
];

export const skill = [
  {
    id: 1,
    img: skillsImg1,
    title: 'HTML',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 2,
    img: skillsImg2,
    title: 'CSS',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 3,
    img: skillsImg3,
    title: 'JavaScript',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 4,
    img: skillsImg4,
    title: 'React',
    level: 'Basic',
    category: 'developer',
  },

  // {
  //   id: 5,
  //   img: skillsImg5,
  //   title: 'Tailwind',
  //   level: 'Intermediate',
  //   category: 'developer',
  // },

  {
    id: 6,
    img: skillsImg6,
    title: 'Java',
    level: 'Intermediate',
    category: 'designer',
  },

  {
    id: 7,
    img: skillsImg7,
    title: 'Python',
    level: 'Intermediate',
    category: 'designer',
  },

  {
    id: 8,
    img: skillsImg8,
    title: 'MySQL',
    level: 'Intermediate',
    category: 'designer',
  },

  {
    id: 9,
    img: skillsImg9,
    title: 'Hibernare',
    level: 'Basic',
    category: 'designer',
  },

  {
    id: 10,
    img: skillsImg10,
    title: 'Spring Boot',
    level: 'Basic',
    category: 'designer',
  },

  // {
  //   id: 11,
  //   img: skillsImg10,
  //   title: 'Machine Learning',
  //   level: 'Basic',
  //   category: 'designer',
  // },
];
export const resume = [
  {
    id: 1,
    category: 'Internship',
    icon: <RiBriefcase4Fill />,
    year: '2024 - Present',
    title: 'Java Full Stack Developer Training <span> Be Practical Tech Solutions </span>',
    desc: 'Completed an intensive training program covering both Frontend and Backend technologies',
  },

  {
    id: 2,
    category: 'Internship',
    icon: <RiBriefcase4Fill />,
    year: '2023 - 2024',
    title: 'Machine Learning Intern <span> M.S Ramaiah Techno Center </span>',
    desc: 'Analysing and interpreting electromyograph (EMG) data to optimise algorithm performance',
  },

  // {
  //   id: 3,
  //   category: 'experience',
  //   icon: <RiBriefcase4Fill />,
  //   year: '2005 - 2013',
  //   title: 'Consultant <span> Videohive </span>',
  //   desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt.',
  // },

  {
    id: 4,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2024',
    title: 'Bachelor Degree <span> M S Ramaiah University of Applied SCiences. </span>',
    desc: 'Bachelor of Technology In Artificial Intelligence and Machine Learning',
  },

  {
    id: 5,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2021',
    title: 'Diploma Degree <span> M S Ramaiah Polytechnic  </span>',
    desc: 'Diploma in Computer Sciecne & Engineering',
  },

  {
    id: 6,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2018',
    title: 'Secondary(10th) <span> New Baldwin International Residential School. </span>',
    // desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore.',
  },
];

export const portfolio = [
  {
    id: 1,
    img: projectImg1,
    title: 'React-calculator',
    description:
      'A React Calculator is a simple web app that performs basic arithmetic using React components and state.',
    skills: [skillsImg4, skillsImg2, skillsImg3],
    link: 'https://react-calculator-seven-steel.vercel.app/', 
  },

  {
    id: 2,
    img: projectImg2,
    title: 'Demo Web Page',
    description:
      'Short description of the project.',
    skills: [skillsImg6, skillsImg7],
    link: 'https://onlydemo.netlify.app/',
  },

  {
    id: 3,
    img: projectImg3,
    title: 'Demo Web Page',
    description:
      'Short description of the project.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: 'https://onlydemo.netlify.app/',
  },

  {
    id: 4,
    img: projectImg4,
    title: 'Demo Web Page',
    description:
      'Short description of the project.',
    skills: [skillsImg4, skillsImg2],
    link: 'https://onlydemo.netlify.app/',
  },

  {
    id: 5,
    img: projectImg5,
    title: 'Demo Web Page',
    description:
      'Short description of the project.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: 'https://onlydemo.netlify.app/',
  },
];

export const themes = [
  {
    img: Theme1,
    hue: '4',
  },

  {
    img: Theme2,
    hue: '271',
  },

  {
    img: Theme3,
    hue: '225',
  },

  {
    img: Theme4,
    hue: '339',
  },

  {
    img: Theme5,
    hue: '80',
  },

  {
    img: Theme6,
    hue: '19',
  },

  {
    img: Theme7,
    hue: '42',
  },
];