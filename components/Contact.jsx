import Link from "next/link"
import { IoMdMail } from "react-icons/io"
import { FaPhoneAlt, FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa"
import SectionTitle from "./SectionTitle"
import ContactLink from "./ContactLink"

export default function Contact() {
    return (<section id="contact" className="py-16">
        <SectionTitle text="Get In Touch" mb={12} />
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg text-center">
            <p className="text-lg text-gray-600 mb-8">
                I'm currently open to new opportunities and collaborations. If you have a project in mind, want to discuss web dev or programming, or just want to say hello, feel free to reach out!
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
                <Link href="mailto:simeon.davenport@mail.com"
                    className="flex items-center space-x-2 text-lg hover:text-indigo-600 conversion duration-200">
                    <IoMdMail size={30} />
                    <span>simeon.davenport@mail.com</span>
                </Link>
                <Link href="tel:+12264023639"
                    className="flex items-center space-x-2 text-lg hover:text-indigo-600 transition duration-200">
                    <FaPhoneAlt size={30} />
                    <span>+1 (226) 402-3639</span>
                </Link>
            </div>
            <div className="flex justify-center space-x-6">
                <ContactLink link="https://www.linkedin.com/in/simeon-davenport" Icon={FaLinkedin} />
                <ContactLink link="https://github.com/davenpos" Icon={FaGithub} />
                <ContactLink link="/resume" Icon={FaFilePdf} />
            </div>
        </div>
    </section>)
}