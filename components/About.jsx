import Image from "next/image"
import Link from "next/link"

export default function About() {
    return (<section id="about" className="py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
                <Image
                    src="/images/SD.jpg"
                    alt="Simeon Davenport"
                    width={50}
                    height={50}
                    className="rounded-full shadow-lg w-50 h-50 object-cover border-4 border-indigo-200"
                />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
                <h1 className="text-5xl font-bold text-indigo-600 mb-4">Simeon Davenport</h1>
                <h2 className="text-2xl text-gray-700 mb-6">Web Developer</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Welcome to my personal portfolio! I am a web developer and computer programmer with a Bachelor's Degree in Computer Science and about eight years of combined work and study under my belt. In particular, I am especially skilled in Node.js, Next.js, React and WordPress. I also know several object-oriented languages such as C++, C# and Java. Feel free to explore my work and get in touch!
                </p>
                <Link
                    href="#contact"
                    className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
                    Get In Touch
                </Link>
            </div>
        </div>
    </section>)
}