import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { FaLink } from "react-icons/fa6"
import IconLinks from "./IconLinks"
import getLogo from "@/functions/getLogo"

export default function Project({ project }) {
    return (<div
        className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="w-full relative aspect-video hover:cursor-pointer">
            <Image
                src={project.image}
                alt={`${project.name} Home Page`}
                fill={true}
            />
        </div>
        <div className="p-6">
            <div className="group relative inline-block mb-2">
                <h3 className="text-2xl font-semibold text-indigo-600 group-hover:text-indigo-700 cursor-pointer transition-colors duration-300">
                    {project.name}
                </h3>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-indigo-700 transition-all duration-300 group-hover:w-full"></span>
            </div>
            <p className="text-gray-600 mb-4">{project.description.brief}</p>
            <div className="flex flex-wrap space-x-1">
                {project.skills.map(skill => {
                    const [colorClasses, Icon] = getLogo(skill)
                    return (<span
                        key={skill}
                        className={`font-medium p-1 mb-1 rounded-full ${colorClasses}`}
                    >
                        <Icon size={25} />
                    </span>)
                })}
            </div>
            <div className="flex space-x-2 mt-4">
                <IconLinks Icon={FaLink} link={project.link} />
                <IconLinks Icon={FaGithub} link={project.code} />
            </div>
        </div>
    </div>)
}