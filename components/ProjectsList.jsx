import Project from "./Project"

export default function ProjectsList() {
    const projects = [
        {
            name: "PROJXON website",
            image: "/images/projects/PROJXON website.png",
            description: {
                brief: "PROJXON's website, built with Next.js and React with improved SEO and performance and deployed with AWS EC2.",
                long: "I helped rebuild the PROJXON website from React to Next.js to improve SEO, working with three others over three weeks. I optimized code using DRY principles, integrated blogs and testimonials from a headless WordPress via the REST API, and enabled logged-in users to add testimonials. I implemented SSG and ISR for efficient data fetching and added metadata. This project enhanced my skills in React Bootstrap, internal API calls in Next.js, and balancing static and dynamic rendering for performance."
            },
            skills: ["Next.js", "React", "WordPress"],
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
            skills: ["Node.js", "Express", "MySQL", "SCSS"],
            code: "https://github.com/davenpos/Sheet-Music-Project"
        },
        {
            name: "Ofori Beauty theme",
            image: "/images/projects/Ofori Beauty theme.png",
            description: {
                brief: "A custom classic WordPress theme built with WooCommerce with a blog section, a 404 page, and a JavaScript-powered live search.",
                long: "A custom WordPress site I built for Ofori Beauty as part of Riipen's Level Up program. I created the theme from scratch, designed it to look like the original site at the time, with some new features such as a blog section, a 404 page, a live search and a custom color picker. It also utilized WooCommerce, SCSS, jQuery, Font Awesome and mobile-first responsive design. It took about a month to build and I was paid $1400 to make it."
            },
            skills: ["WordPress", "WooCommerce", "SCSS", "jQuery"],
            code: "https://github.com/davenpos/Sheet-Music-Project"
        }
    ]

    return (<section id="projects" className="py-16">
        <h2 className="section-title text-4xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => <Project key={project.name} project={project} />)}
        </div>
    </section>)
}