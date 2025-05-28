import { Fragment } from "react"
import {
    FaHtml5,
    FaCss3,
    FaPhp,
    FaJava,
    FaPython,
    FaReact,
    FaNodeJs,
    FaSass,
    FaWordpress,
    FaBootstrap,
    FaGitAlt,
    FaStripeS
} from "react-icons/fa"
import {
    SiTypescript,
    SiExpress,
    SiStrapi,
    SiEjs,
    SiMongodb,
    SiWebpack,
    SiAmazonec2,
    SiAndroidstudio,
    SiSendgrid
} from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io5"
import { TbBrandCSharp, TbBrandCpp } from "react-icons/tb"
import { DiJqueryLogo } from "react-icons/di"
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri"
import { GrMysql } from "react-icons/gr"
import SkillIcon from './SkillIcon'

export default function SkillsList() {
    const skillset = [
        {
            type: "Languages",
            skills: [
                {
                    name: "HTML",
                    colorClasses: "bg-orange-200 text-orange-600",
                    icon: FaHtml5
                },
                {
                    name: "CSS",
                    colorClasses: "bg-cyan-300 text-cyan-700",
                    icon: FaCss3
                },
                {
                    name: "JavaScript",
                    colorClasses: "bg-yellow-300 text-yellow-700",
                    icon: IoLogoJavascript
                },
                {
                    name: "PHP",
                    colorClasses: "bg-purple-200 text-purple-600",
                    icon: FaPhp
                },
                {
                    name: "TypeScript",
                    colorClasses: "bg-blue-400 text-blue-800",
                    icon: SiTypescript
                }, ,
                {
                    name: "C++",
                    colorClasses: "bg-blue-200 text-blue-600",
                    icon: TbBrandCpp
                },
                {
                    name: "C#",
                    colorClasses: "bg-indigo-400 text-indigo-800",
                    icon: TbBrandCSharp
                },
                {
                    name: "Java",
                    colorClasses: "bg-amber-500 text-amber-900",
                    icon: FaJava
                },
                {
                    name: "Python",
                    colorClasses: "bg-yellow-200 text-yellow-600",
                    icon: FaPython
                }
            ]
        },
        {
            type: "Frontend",
            skills: [
                {
                    name: "React",
                    colorClasses: "bg-cyan-100 text-cyan-500",
                    icon: FaReact
                },
                {
                    name: "Next.js",
                    colorClasses: "bg-gray-600 text-black",
                    icon: RiNextjsFill
                },
                {
                    name: "jQuery",
                    colorClasses: "bg-teal-500 text-teal-900",
                    icon: DiJqueryLogo
                },
                {
                    name: "SASS",
                    colorClasses: "bg-pink-500 text-pink-900",
                    icon: FaSass
                },
                {
                    name: "Tailwind",
                    colorClasses: "bg-cyan-200 text-cyan-600",
                    icon: RiTailwindCssFill
                },
                {
                    name: "WordPress",
                    colorClasses: "bg-sky-400 text-sky-800",
                    icon: FaWordpress
                },
                {
                    name: "Bootstrap",
                    colorClasses: "bg-violet-500 text-violet-900",
                    icon: FaBootstrap
                }
            ]
        },
        {
            type: "Backend",
            skills: [
                {
                    name: "Node.js",
                    colorClasses: "bg-green-300 text-green-700",
                    icon: FaNodeJs
                },
                {
                    name: "Express",
                    colorClasses: "bg-gray-400 text-gray-800",
                    icon: SiExpress
                },
                {
                    name: "Strapi",
                    colorClasses: "bg-violet-400 text-violet-800",
                    icon: SiStrapi
                },
                {
                    name: "EJS",
                    colorClasses: "bg-lime-300 text-lime-700",
                    icon: SiEjs
                }
            ]
        },
        {
            type: "Databases",
            skills: [
                {
                    name: "MySQL",
                    colorClasses: "bg-cyan-500 text-cyan-900",
                    icon: GrMysql
                },
                {
                    name: "MongoDB",
                    colorClasses: "bg-emerald-400 text-emerald-800",
                    icon: SiMongodb
                }
            ]
        },
        {
            type: "Other",
            skills: [
                {
                    name: "GitHub",
                    colorClasses: "bg-orange-400 text-orange-800",
                    icon: FaGitAlt
                },
                {
                    name: "Webpack",
                    colorClasses: "bg-sky-200 text-sky-600",
                    icon: SiWebpack
                },
                {
                    name: "AWS EC2",
                    colorClasses: "bg-amber-400 text-amber-800",
                    icon: SiAmazonec2
                },
                {
                    name: "Android",
                    colorClasses: "bg-lime-400 text-lime-800",
                    icon: SiAndroidstudio
                },
                {
                    name: "Stripe",
                    colorClasses: "bg-indigo-300 text-indigo-700",
                    icon: FaStripeS
                },
                {
                    name: "SendGrid",
                    colorClasses: "bg-sky-100 text-sky-500",
                    icon: SiSendgrid
                }
            ]
        }
    ]

    return (<section id="skills" className="py-16 bg-white rounded-xl shadow-md">
        <h2 className="section-title text-4xl font-bold text-center mb-8 text-gray-800">My Skillset</h2>
        {skillset.map(subset => (<Fragment key={subset.type}>
            <h3 className="section-title text-3xl font-bold text-center my-6 text-gray-800">
                {subset.type}
            </h3>
            <div className="flex flex-wrap justify-center gap-8 text-center mx-8">
                {subset.skills.map(skill => <SkillIcon
                    key={skill.name}
                    name={skill.name}
                    Icon={skill.icon}
                    colorClasses={skill.colorClasses}
                />)}
            </div>
        </Fragment>))}
    </section>)
}