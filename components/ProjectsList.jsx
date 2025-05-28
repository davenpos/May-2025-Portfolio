import Project from "./Project"

export default function ProjectsList() {
    const projects = [
        {
            name: "PROJXON Website",
            image: "/images/projects/PROJXON Website.png",
            description: {
                brief: "PROJXON's website, built with Next.js and React with improved SEO and performance and deployed with AWS EC2.",
                long: "I helped rebuild the PROJXON website from React to Next.js to improve SEO, working with three others over three weeks. I optimized code using DRY principles, integrated blogs and testimonials from a headless WordPress via the REST API, and enabled logged-in users to add testimonials. I implemented SSG and ISR for efficient data fetching and added metadata. This project enhanced my skills in React Bootstrap, internal API calls in Next.js, and balancing static and dynamic rendering for performance."
            },
            skills: [
                "Next.js",
                "React",
                "WordPress"
            ],
            link: "https://www.projxon.com/",
            code: "https://github.com/PROJXON/ProjxonNext"
        }
    ]

    return (<section id="projects" className="py-16">
        <h2 className="section-title text-4xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => <Project key={project.name} project={project} />)}
        </div>
    </section>)
}