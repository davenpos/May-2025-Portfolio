import Link from "next/link"

export default function ContactLink({ link, Icon }) {
    console.log(Icon)
    return (<Link href={link} target="_blank" rel="noopener noreferrer"
        className="hover:text-indigo-600 transition duration-200">
        <Icon size={30} />
    </Link>)
}