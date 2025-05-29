import Link from "next/link"
import { IoMdMail } from "react-icons/io"
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa"

export default function Contact() {
    return (<section id="contact" className="py-16">
        <h2 className="section-title text-4xl font-bold text-center mb-12 text-gray-800">Get In Touch</h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg text-center">
            <p className="text-lg text-gray-600 mb-8">
                I'm currently open to new opportunities and collaborations. If you have a project in mind, want to discuss web dev or programming, or just want to say hello, feel free to reach out!
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
                <Link href="mailto:simmywim@hotmail.com"
                    className="flex items-center space-x-2 text-lg hover:text-indigo-600 conversion duration-200">
                    <IoMdMail size={30} />
                    <span>simmywim@hotmail.com</span>
                </Link>
                <Link href="tel:+12264023639"
                    className="flex items-center space-x-2 text-lg hover:text-indigo-600 transition duration-200">
                    <FaPhoneAlt size={30} />
                    <span>+1 (226) 402-3639</span>
                </Link>
            </div>
            <div className="flex justify-center space-x-6">
                <Link href="#" target="_blank" rel="noopener noreferrer"
                    className="hover:text-indigo-600 transition duration-200">
                    <FaLinkedin size={30} />
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer"
                    className="hover:text-indigo-600 transition duration-200">
                    <FaGithub size={30} />
                </Link>
                {/*<Link
                    href="/Simeon Davenport May 2025 Resume.pdf"
                    download="Simeon Davenport's Resume"
                >
                    Download the pdf
                </Link>*/}
            </div>
        </div>
    </section>)
}