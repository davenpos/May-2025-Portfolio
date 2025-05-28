import Image from "next/image"

export default function Projects() {
    return (<section id="projects" className="py-16">
        <h2 className="section-title text-4xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Image
                    src={null}
                    alt="Project Alpha"
                    fill={true}
                />
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-indigo-600 mb-2">Project Alpha</h3>
                    <p className="text-gray-600 mb-4">A brief description of Project Alpha. Highlight key features or
                        technologies used in this innovative web application.</p>
                    <div className="flex space-x-2">
                        <span
                            className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">React</span>
                        <span
                            className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Node.js</span>
                    </div>
                    <a href="#" className="mt-4 inline-block text-indigo-500 hover:text-indigo-700 font-medium">View
                        Details &rarr;</a>
                </div>
            </div>
            <div
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Image
                    src={null}
                    alt="Project Alpha"
                    fill={true}
                />
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-indigo-600 mb-2">Web App Beta</h3>
                    <p className="text-gray-600 mb-4">Description of this amazing mobile application. Mention its
                        purpose and any interesting aspects of its development.</p>
                    <div className="flex space-x-2">
                        <span
                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Vue.js</span>
                        <span
                            className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Firebase</span>
                    </div>
                    <a href="#" className="mt-4 inline-block text-indigo-500 hover:text-indigo-700 font-medium">See on
                        GitHub &rarr;</a>
                </div>
            </div>
            <div
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Image
                    src={null}
                    alt="Project Alpha"
                    fill={true}
                />
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-indigo-600 mb-2">Data Viz Gamma</h3>
                    <p className="text-gray-600 mb-4">An overview of this data visualization project. Discuss the
                        insights gained or tools utilized in this project.</p>
                    <div className="flex space-x-2">
                        <span
                            className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Python</span>
                        <span
                            className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">D3.js</span>
                    </div>
                    <a href="#" className="mt-4 inline-block text-indigo-500 hover:text-indigo-700 font-medium">Explore
                        Data &rarr;</a>
                </div>
            </div>
        </div>
    </section>)
}