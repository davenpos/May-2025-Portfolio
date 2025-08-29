import {
  FaHtml5,
  FaCss3,
  FaPhp,
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaSass,
  FaWordpress,
  FaBootstrap,
  FaGitAlt,
  FaStripeS,
} from 'react-icons/fa';
import {
  SiExpress,
  SiStrapi,
  SiEjs,
  SiMongodb,
  SiWebpack,
  SiAmazonec2,
  SiAndroidstudio,
  SiSendgrid,
  SiWoocommerce,
  SiRender,
  SiVite,
} from 'react-icons/si';
import { IoLogoJavascript, IoLogoVercel } from 'react-icons/io5';
import { TbBrandCSharp, TbBrandCpp } from 'react-icons/tb';
import { DiJqueryLogo } from 'react-icons/di';
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri';
import { GrMysql } from 'react-icons/gr';
import { BiLogoTypescript } from 'react-icons/bi';

export default function getLogo(skill) {
  let classes;
  let icon;
  if (skill === 'Android') skill = 'Android Studio';
  if (skill === 'SASS' || skill === 'SCSS') skill = 'SASS/SCSS';

  switch (skill) {
    case 'HTML':
      classes = 'bg-orange-200 text-orange-600';
      icon = FaHtml5;
      break;
    case 'CSS':
      classes = 'bg-cyan-300 text-cyan-700';
      icon = FaCss3;
      break;
    case 'JavaScript':
      classes = 'bg-yellow-300 text-yellow-700';
      icon = IoLogoJavascript;
      break;
    case 'PHP':
      classes = 'bg-indigo-500 text-indigo-900';
      icon = FaPhp;
      break;
    case 'TypeScript':
      classes = 'bg-blue-400 text-blue-800';
      icon = BiLogoTypescript;
      break;
    case 'C++':
      classes = 'bg-blue-200 text-blue-600';
      icon = TbBrandCpp;
      break;
    case 'C#':
      classes = 'bg-indigo-400 text-indigo-800';
      icon = TbBrandCSharp;
      break;
    case 'Java':
      classes = 'bg-amber-500 text-amber-900';
      icon = FaJava;
      break;
    case 'Python':
      classes = 'bg-yellow-200 text-yellow-600';
      icon = FaPython;
      break;
    case 'React':
      classes = 'bg-cyan-100 text-cyan-500';
      icon = FaReact;
      break;
    case 'Next.js':
      classes = 'bg-gray-600 text-black';
      icon = RiNextjsFill;
      break;
    case 'Vercel':
      classes = 'bg-gray-600 text-black';
      icon = IoLogoVercel;
      break;
    case 'jQuery':
      classes = 'bg-teal-500 text-teal-900';
      icon = DiJqueryLogo;
      break;
    case 'SASS/SCSS':
      classes = 'bg-pink-500 text-pink-900';
      icon = FaSass;
      break;
    case 'Tailwind':
      classes = 'bg-cyan-200 text-cyan-600';
      icon = RiTailwindCssFill;
      break;
    case 'WordPress':
      classes = 'bg-sky-400 text-sky-800';
      icon = FaWordpress;
      break;
    case 'WooCommerce':
      classes = 'bg-purple-600 text-purple-950';
      icon = SiWoocommerce;
      break;
    case 'Bootstrap':
      classes = 'bg-violet-500 text-violet-900';
      icon = FaBootstrap;
      break;
    case 'Node.js':
      classes = 'bg-green-300 text-green-700';
      icon = FaNodeJs;
      break;
    case 'Express':
      classes = 'bg-gray-400 text-gray-800';
      icon = SiExpress;
      break;
    case 'Strapi':
      classes = 'bg-violet-400 text-violet-800';
      icon = SiStrapi;
      break;
    case 'EJS':
      classes = 'bg-lime-300 text-lime-700';
      icon = SiEjs;
      break;
    case 'MySQL':
      classes = 'bg-cyan-500 text-cyan-900';
      icon = GrMysql;
      break;
    case 'MongoDB':
      classes = 'bg-green-400 text-green-800';
      icon = SiMongodb;
      break;
    case 'Render':
      classes = 'bg-violet-600 text-violet-950';
      icon = SiRender;
      break;
    case 'Git':
      classes = 'bg-orange-400 text-orange-800';
      icon = FaGitAlt;
      break;
    case 'Webpack':
      classes = 'bg-sky-200 text-sky-600';
      icon = SiWebpack;
      break;
    case 'AWS EC2':
      classes = 'bg-amber-400 text-amber-800';
      icon = SiAmazonec2;
      break;
    case 'Android Studio':
      classes = 'bg-lime-400 text-lime-800';
      icon = SiAndroidstudio;
      break;
    case 'Stripe':
      classes = 'bg-indigo-300 text-indigo-700';
      icon = FaStripeS;
      break;
    case 'SendGrid':
      classes = 'bg-sky-100 text-sky-500';
      icon = SiSendgrid;
      break;
    case 'Vite':
      classes = 'bg-purple-500 text-purple-900';
      icon = SiVite;
  }

  return [classes, icon];
}
