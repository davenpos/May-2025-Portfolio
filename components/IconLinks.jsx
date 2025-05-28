import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function IconLinks({ icon, link }) {
    return (<>
        {link && (<Link href={link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon} className="text-indigo-600 w-7 h-7 hover:text-indigo-700 transition-300" />
        </Link>)}
    </>)
}