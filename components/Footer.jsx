"use client"
import { useEffect } from "react"

export default function Footer() {
    useEffect(() => {
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Add simple animations on scroll for section titles
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Optional: only animate once
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of element is visible

        document.querySelectorAll('.section-title').forEach(title => {
            observer.observe(title);
        });

        // Soft scrolling for navigation links
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Calculate position of target element
                    const headerOffset = document.querySelector('header').offsetHeight + 20; // Consider header height + some padding
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            });
        });
    }, [])

    return (<footer className="bg-white py-6 shadow-inner mt-8">
        <div className="container mx-auto px-6 text-center text-gray-600">
            <p>&copy; <span id="current-year"></span> Simeon Davenport. All rights reserved.</p>
        </div>
    </footer>)
}