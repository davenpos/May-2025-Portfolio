import getLogo from "@/functions/getLogo"

export default function SkillIcon({ name }) {
    const [colorClasses, Icon] = getLogo(name)

    return (<div
        className={`flex items-center justify-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-25 h-25 ${colorClasses}`}
    >
        <div>
            <Icon className="m-auto" size={60} />
            <h3 className="font-semibold">{name}</h3>
        </div>
    </div>)
}