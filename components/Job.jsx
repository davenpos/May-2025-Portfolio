import UsedSkills from "./UsedSkills"

export default function Job({ job }) {
    return (<div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500 hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-indigo-700">{job.title}</h3>
            <span className="text-sm text-gray-500 whitespace-nowrap">
                {job.dates.start} - {job.dates.end}
            </span>
        </div>
        <p className="text-md text-gray-600 mt-0 mb-2">{job.company}</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm mb-2">
            {job.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
        </ul>
        <UsedSkills skills={job.skills} />
    </div>)
}