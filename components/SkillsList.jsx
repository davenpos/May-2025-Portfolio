import { FaHtml5, FaCss3, FaPhp } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
//import { faHtml5, faCss, faJs, faPhp, faNodeJs, faWordpress } from '@fortawesome/free-brands-svg-icons'
//import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import SkillIcon from './SkillIcon'

export default function SkillsList() {
    const skills = [
        {
            name: "HTML",
            color: "orange",
            icon: FaHtml5
        },
        {
            name: "CSS",
            color: "cyan",
            icon: FaCss3
        },
        {
            name: "JavaScript",
            color: "yellow",
            icon: IoLogoJavascript
        },
        {
            name: "PHP",
            color: "indigo",
            icon: FaPhp
        }
    ]

    return (<section id="skills" className="py-16 bg-white rounded-xl shadow-md">
        <h2 className="section-title text-4xl font-bold text-center mb-12 text-gray-800">My Skillset</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 text-center mx-8">
            {skills.map(skill => <SkillIcon
                key={skill.name}
                name={skill.name}
                Icon={skill.icon}
                color={skill.color}
            />)}
        </div>
    </section>)
}