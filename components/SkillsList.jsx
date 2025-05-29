import { Fragment } from "react"
import SkillIcon from './SkillIcon'
import SectionTitle from "./SectionTitle"

export default function SkillsList() {
    const skillset = [
        {
            type: "Languages",
            skills: ["HTML", "CSS", "JavaScript", "PHP", "TypeScript", "C++", "C#", "Java", "Python"]
        },
        {
            type: "Frontend",
            skills: ["React", "Next.js", "jQuery", "SASS/SCSS", "Tailwind", "WordPress", "WooCommerce", "Bootstrap"]
        },
        {
            type: "Backend",
            skills: ["Node.js", "Express", "Strapi", "EJS"]
        },
        {
            type: "Databases",
            skills: ["MySQL", "MongoDB"]
        },
        {
            type: "Other",
            skills: ["Git", "Webpack", "AWS EC2", "Android", "Stripe", "SendGrid"]
        }
    ]

    return (<section id="skills" className="py-16 bg-white rounded-xl shadow-md">
        <SectionTitle text="My Skillset" mb={8} />
        {skillset.map(subset => (<Fragment key={subset.type}>
            <h3 className="section-title text-3xl font-bold text-center my-6 text-gray-800">
                {subset.type}
            </h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-8 text-center mx-3 md:mx-8">
                {subset.skills.map(skill => <SkillIcon key={skill} name={skill} />)}
            </div>
        </Fragment>))}
    </section>)
}