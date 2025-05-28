import { faHtml5, faCss } from '@fortawesome/free-brands-svg-icons'
import SkillIcon from './SkillIcon'

export default function SkillsList() {
    const skills = [
        {
            name: "HTML",
            color: "orange",
            icon: faHtml5
        },
        {
            name: "CSS",
            color: "cyan",
            icon: faCss
        }
    ]

    return (<section id="skills" className="py-16 bg-white rounded-xl shadow-md">
        <h2 className="section-title text-4xl font-bold text-center mb-12 text-gray-800">My Skillset</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 text-center mx-8">
            {skills.map(skill => <SkillIcon
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
            />)}
        </div>
    </section>)
}