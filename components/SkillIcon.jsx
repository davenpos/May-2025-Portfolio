export default function SkillIcon({ name, Icon, color }) {
    return (<div
        className={`p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-${color}-200 text-${color}-600`}
    >
        <Icon className="m-auto" size={60} />
        <h3 className="font-semibold">{name}</h3>
    </div>)
}