import Link from "next/link"

export default function IconLinks({ Icon, link }) {
    return (<>
        {link && (<Link href={link} target="_blank" rel="noopener noreferrer">
            <Icon size={25} className="text-indigo-600 hover:text-indigo-700 transition-all duration-300" />
        </Link>)}
    </>)
}