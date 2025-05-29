import getLogo from "@/functions/getLogo"

export default function SkillIcon({ name }) {
    const [colorClasses, Icon] = getLogo(name)

    return (<div
        className={`flex items-center justify-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-xs md:text-sm w-22 h-22 md:w-25 md:h-25 ${colorClasses}`}
    >
        <div>
            <Icon className="m-auto" size={60} />
            <h3 className="font-semibold">{name}</h3>
        </div>
    </div>)
}