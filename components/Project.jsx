import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { FaLink } from "react-icons/fa6"
import IconLinks from "./IconLinks"

export default function Project({ project }) {
    return (<div
        className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="w-full relative aspect-video">
            <Image
                src={project.image}
                alt="Project Alpha"
                fill={true}
            />
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">{project.name}</h3>
            <p className="text-gray-600 mb-4">{project.description.brief}</p>
            <div className="flex space-x-2">
                {project.skills.map(skill => (<span
                    key={skill}
                    className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                >
                    {skill}
                </span>))}
            </div>
            <div className="flex space-x-2 mt-4">
                <IconLinks Icon={FaLink} link={project.link} />
                <IconLinks Icon={FaGithub} link={project.code} />
            </div>
        </div>
    </div>)
}