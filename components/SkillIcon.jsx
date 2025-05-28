export default function SkillIcon({ name, Icon, colorClasses }) {
    return (<div
        className={`p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-30 h-30 ${colorClasses}`}
    >
        <Icon className="m-auto" size={60} />
        <h3 className="font-semibold">{name}</h3>
    </div>)
}