"use client"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

export default function Modal({ children, onClose }) {
    const [exiting, setExiting] = useState(false)

    useEffect(() => {
        const handleEscape = e => {
            if (e.key === "Escape") onClose()
        }
        document.addEventListener("keydown", handleEscape)
        document.body.style.overflow = "hidden"
        return () => {
            document.removeEventListener("keydown", handleEscape)
            document.body.style.overflow = ""
        }
    }, [])

    const handleClose = () => {
        setExiting(true)
        setTimeout(() => {
            onClose()
        }, 1000)
    }

    return createPortal(<div
        className={`fixed inset-0 z-50 flex items-center justify-center ${exiting ? "animate-fadeOutBackdrop" : "animate-fadeInBackdrop"}`}
        onClick={handleClose}
    >
        <div
            className={`relative bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 px-6 py-4 ${exiting ? "animate-zoomOut" : "animate-zoomIn"
                }`}
            onClick={e => e.stopPropagation()}
        >
            {children}
        </div>
    </div>,
        document.body)
}