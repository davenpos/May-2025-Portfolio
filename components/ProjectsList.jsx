import Project from './Project';
import SectionTitle from './SectionTitle';

export default function ProjectsList() {
  const projects = [
    {
      name: "Simeon's Best Hit Songs",
      image: '/images/projects/besthitsongs.png',
      description: {
        brief:
          'A Next.js/React/Tailwind site with a PostgreSQL backend listing my favorite Billboard hit songs.',
        long: "This site displays my favorite Billboard Year-End Hot 100 songs in a table, inspired by the various Best Hit Songs videos I've made on YouTube. Users can view what my favorite hit songs of all time are, or they can narrow it down by decade or by year. They can also click on a song to learn more information about the song. All song information is stored in a Neon PostgreSQL database, fetched via Prisma. It also includes an admin backend allowing me to add, edit or reorder songs in the database.",
      },
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Next.js',
        'React',
        'Tailwind',
        'PostgreSQL',
        'Prisma',
        'Vercel',
      ],
      link: 'https://simeon-s-best-hit-songs.vercel.app/',
      code: 'https://github.com/davenpos/Simeon-s-Best-Hit-Songs',
    },
    {
      name: 'Zephyr Aero Leather',
      image: '/images/projects/ZAL.PNG',
      description: {
        brief:
          'An e-commerce site built with Next.js, React and Tailwind, utilizing Stripe for payment and a headless WooCommerce.',
        long: 'This was a site I helped build at PROJXON. It is an e-commerce site that sells leather products such as wallets, belts, bags and cases. The site is built with Next.js, React and Tailwind. It utilizes Stripe for payment and is synced to a headless WooCommerce. Users can log in or sign up or simply shop as a guest. Logged in users can also view their order history. I worked on various parts of the site including the order history and payment pages and the Stripe integration.',
      },
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'PHP',
        'Next.js',
        'React',
        'Tailwind',
        'WordPress',
        'WooCommerce',
        'Stripe',
        'AWS EC2',
      ],
      link: 'https://zephyraeroleather.com/',
      code: 'https://github.com/PROJXON/zephyr-aero-leather',
    },
    {
      name: 'PROJXON website',
      image: '/images/projects/projxon.PNG',
      description: {
        brief:
          "PROJXON's website, built with Next.js and React with improved SEO and performance and deployed with AWS EC2.",
        long: 'I helped rebuild the PROJXON website from React to Next.js to improve SEO, working with three others over three weeks. I optimized code using DRY principles, integrated blogs and testimonials from a headless WordPress via the REST API, and enabled logged-in users to add testimonials. I implemented SSG and ISR for efficient data fetching and added metadata. This project enhanced my skills in React Bootstrap, internal API calls in Next.js, and balancing static and dynamic rendering for performance.',
      },
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Next.js',
        'React',
        'WordPress',
        'Bootstrap',
        'AWS EC2',
      ],
      link: 'https://www.projxon.com/',
      code: 'https://github.com/PROJXON/ProjxonNext',
    },
  ];

  return (
    <section id="projects" className="py-16">
      <SectionTitle text="Featured Projects" mb={12} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
