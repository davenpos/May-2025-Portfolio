"use client"
import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { FaLink } from "react-icons/fa6"
import { IoClose } from "react-icons/io5"
import { useState, useEffect } from "react"
import IconLinks from "./IconLinks"
import Modal from "./Modal"
import UsedSkills from "./UsedSkills"

export default function Project({ project }) {
    const [showOverlay, setShowOverlay] = useState(false)
    const [requestModalClose, setRequestModalClose] = useState(null)

    useEffect(() => {
        document.body.style.overflow = showOverlay ? "hidden" : ""
    }, [showOverlay])

    return (<>
        <div
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div
                className="w-full relative aspect-video cursor-pointer"
                onClick={() => setShowOverlay(true)}
            >
                <Image
                    src={project.image}
                    alt={`${project.name} Home Page`}
                    fill={true}
                    className="hover:opacity-50 transition-color duration-300"
                />
            </div>
            <div className="p-6">
                <div className="group relative inline-block mb-2" onClick={() => setShowOverlay(true)}>
                    <h3 className="text-2xl font-semibold text-indigo-600 group-hover:text-indigo-700 cursor-pointer transition-colors duration-300">
                        {project.name}
                    </h3>
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-indigo-700 transition-all duration-300 group-hover:w-full"></span>
                </div>
                <p className="text-gray-600 mb-4">{project.description.brief}</p>
                <UsedSkills skills={project.skills} />
                <div className="flex space-x-2 mt-2">
                    <IconLinks Icon={FaLink} link={project.link} />
                    <IconLinks Icon={FaGithub} link={project.code} />
                </div>
            </div>
        </div>

        {showOverlay && (<Modal
            onClose={() => setShowOverlay(false)}
            closeSetter={setRequestModalClose}
        >
            <button
                className="absolute top-2 right-5 text-gray-600 hover:text-black text-2xl"
                onClick={() => requestModalClose && requestModalClose()}
            >
                <IoClose className="cursor-pointer transition-colors duration-300" />
            </button>

            <div className="relative w-full aspect-video mb-2 rounded-md overflow-hidden mt-6">
                <Image
                    src={project.image}
                    alt={`${project.name} Full View`}
                    fill
                    className="object-cover"
                />
            </div>

            <h3 className="text-2xl font-bold mb-2 text-center text-indigo-700">
                {project.name}
            </h3>
            <div className="flex justify-between items-center">
                <div className="flex flex-wrap items-center gap-y-1 gap-x-2">
                    <ProjectSkills project={project} />
                </div>
                <div className="flex space-x-2">
                    <IconLinks Icon={FaLink} link={project.link} />
                    <IconLinks Icon={FaGithub} link={project.code} />
                </div>
            </div>
            <p className="text-gray-700 whitespace-pre-line text-sm md:text-base">
                {project.description.long}
            </p>
        </Modal>)}
    </>)
}