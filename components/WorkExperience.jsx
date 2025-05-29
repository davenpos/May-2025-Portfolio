import Job from "./Job"
import SectionTitle from "./SectionTitle"

export default function WorkExperience() {
    const jobs = [
        {
            title: "Web Developer",
            company: "PROJXON",
            dates: {
                start: "Mar 2025",
                end: "Present"
            },
            bullets: [
                "Developed responsive, cross-browser compatible websites using React, Next.js and headless WordPress.",
                "Enhanced user experience by implementing responsive web design and optimizing website performance.",
                "Participated in agile sprints and weekly participation meetings."
            ]
        },
        {
            title: "AI Trainer",
            company: "DataAnnotation",
            dates: {
                start: "May 2024",
                end: "Present"
            },
            bullets: [
                "Training and optimizing chatbot models using Python, JavaScript, C++, etc.",
                "Creating structured datasets (CSV, JSON, XML) for AI response evaluation.",
                "Participated in agile sprints and weekly participation meetings."
            ]
        },
        {
            title: "Work Placement",
            company: "Lakehead Public School Board",
            dates: {
                start: "Mar 2019",
                end: "May 2019"
            },
            bullets: [
                "Designed and implemented around 5 custom WordPress themes for school websites.",
                "Integrated plugins into websites to enhance site usability and functionality.",
                "Generated JasperSoft reports to streamline reporting."
            ]
        }
    ]
    return (<section id="experience" className="py-16">
        <SectionTitle text="Work Experience" mb={12} />
        <div className="space-y-8 max-w-3xl mx-auto">
            {jobs.map((job, i) => <Job key={i} job={job} />)}
        </div>
    </section>)
}