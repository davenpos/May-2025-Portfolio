import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SkillIcon({ name, icon, color }) {
    return (<div className={`p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-${color}-200 text-${color}-600`}>
        <FontAwesomeIcon icon={icon} className="w-20 h-20 m-auto" />
        <h3 className="font-semibold">{name}</h3>
    </div>)
}