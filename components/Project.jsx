import Image from "next/image"

export default function Project({ project }) {
    return (<div
        className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <Image
            src={null}
            alt="Project Alpha"
            fill={true}
        />
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
            <a href="#" className="mt-4 inline-block text-indigo-500 hover:text-indigo-700 font-medium">View
                Details &rarr;</a>
        </div>
    </div>)
}