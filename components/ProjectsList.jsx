import Project from "./Project"
import SectionTitle from "./SectionTitle"

export default function ProjectsList() {
    const projects = [
        {
            name: "Zephyr Aero Leather",
            image: "/images/projects/zephyr-aero-leather.PNG",
            description: {
                brief: "An e-commerce site built with Next.js, React and Tailwind, utilizing Stripe for payment and a headless WooCommerce",
                long: "This was a site I helped build at PROJXON. It is an e-commerce site that sells leather products such as wallets, belts, bags and cases. The site is built with Next.js, React and Tailwind. It utilizes Stripe for payment and is synced to a headless WooCommerce. Users can log in or sign up or simply shop as a guest. Logged in users can also view their order history. I worked on various parts of the site including the order history and payment pages and the Stripe integration."
            },
            skills: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "Next.js", "React", "Tailwind", "WordPress", "WooCommerce", "Stripe", "AWS EC2"],
            link: "https://zephyraeroleather.com/",
            code: "https://github.com/PROJXON/zephyr-aero-leather"
        },
        {
            name: "PROJXON website",
            image: "/images/projects/projxon-website.png",
            description: {
                brief: "PROJXON's website, built with Next.js and React with improved SEO and performance and deployed with AWS EC2.",
                long: "I helped rebuild the PROJXON website from React to Next.js to improve SEO, working with three others over three weeks. I optimized code using DRY principles, integrated blogs and testimonials from a headless WordPress via the REST API, and enabled logged-in users to add testimonials. I implemented SSG and ISR for efficient data fetching and added metadata. This project enhanced my skills in React Bootstrap, internal API calls in Next.js, and balancing static and dynamic rendering for performance."
            },
            skills: ["HTML", "CSS", "JavaScript", "Next.js", "React", "WordPress", "Bootstrap", "AWS EC2"],
            link: "https://www.projxon.com/",
            code: "https://github.com/PROJXON/ProjxonNext"
        },
        {
            name: "Sheet Music project",
            image: "/images/projects/Sheet Music project.png",
            description: {
                brief: "An application built with Node.js and Express that allows users to log in or sign up and create a simple piece of sheet music.",
                long: "Inspired by a couple of Node.js applications I had built in the summer prior, I created another Node.js project that allows users to create a piece of sheet music, similar to Finale. Users can log in or sign up, create a very simple piece of sheet music and display it in the web browser. The application runs on an Express server, utilizes an MVC framework and EJS for the views and stores all information into a MySQL database. All musical notation is displayed using special characters in a font called Bravura Text."
            },
            skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL", "SCSS", "EJS", "Webpack"],
            code: "https://github.com/davenpos/Sheet-Music-Project"
        }
    ]

    return (<section id="projects" className="py-16">
        <SectionTitle text="Featured Projects" mb={12} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => <Project key={project.name} project={project} />)}
        </div>
    </section>)
}