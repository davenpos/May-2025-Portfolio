import Project from './Project';
import SectionTitle from './SectionTitle';

export default function ProjectsList() {
  const projects = [
    {
      name: 'Trail Map Report',
      image: '/images/projects/trailmapreport.jpg',
      description: {
        brief:
          'A simple WordPress site where users can set trails as either "open" or "closed" and see the updated map tooltip.',
        long: 'This is a test task I did for a WordPress job I applied for. It is a simple WordPress site with two pages. On the main page, there is a form where users can set 5 trails as either "open" or "closed", submit the form, then go to the Report Page, hover over the trails on the trail map (or tap on mobile) and view each trail\'s status from the most recent submission to the form. The site uses jQuery and SCSS instead of vanilla JS and CSS and is deployed online with AWS EC2.',
      },
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'PHP',
        'WordPress',
        'Node.js',
        'jQuery',
        'SCSS',
        'AWS EC2',
      ],
      link: 'https://trailmapreport.simeondavenport.com/',
      code: 'https://github.com/davenpos/Trail-Map-Report',
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
