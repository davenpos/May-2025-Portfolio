"use client"
import getLogo from "@/functions/getLogo"
import { useState, useEffect } from "react"

export default function ProjectSkills({ project }) {
    const [size, setSize] = useState(20)

    useEffect(() => {
        function updateSize() {
            if (window.innerWidth >= 768) setSize(25)
            else setSize(20)
        }

        updateSize()

        window.addEventListener("resize", updateSize)
        return () => window.removeEventListener("resize", updateSize)
    })

    return (<>
        {project.skills.map(skill => {
            const [colorClasses, Icon] = getLogo(skill)
            return (<span
                key={skill}
                className={`p-1 mb-1 rounded-full ${colorClasses}`}
            >
                <Icon size={size} />
            </span>)
        })}
    </>)
}