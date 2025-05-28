import Project from "./Project"

export default function ProjectsList() {
    const projects = [
        {
            name: "PROJXON Website",
            description: {
                brief: "brief description",
                long: "long description"
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