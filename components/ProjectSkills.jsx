import getLogo from "@/functions/getLogo"

export default function ProjectSkills({ project }) {
    return (<>
        {project.skills.map(skill => {
            const [colorClasses, Icon] = getLogo(skill)
            return (<span
                key={skill}
                className={`font-medium p-1 mb-1 rounded-full ${colorClasses}`}
            >
                <Icon size={25} />
            </span>)
        })}
    </>)
}