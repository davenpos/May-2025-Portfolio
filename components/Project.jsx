'use client';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import IconLink from './IconLink';
import UsedSkills from './UsedSkills';

export default function Project({ project }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = showOverlay ? 'hidden' : '';
  }, [showOverlay]);

  const handleOpen = () => {
    setExiting(false);
    setShowOverlay(true);
  };

  const handleClose = () => {
    setExiting(true);
    setTimeout(() => {
      setShowOverlay(false);
    }, 1000);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform will-change-transform hover:scale-105 transition-transform duration-300">
        <div className="w-full relative aspect-video cursor-pointer" onClick={handleOpen}>
          <Image
            src={project.image}
            alt={`${project.name} Home Page`}
            fill={true}
            className="hover:opacity-50 transition-color duration-300"
          />
        </div>
        <div className="p-6">
          <div className="group relative inline-block mb-2" onClick={handleOpen}>
            <h3 className="text-2xl font-semibold text-indigo-600 group-hover:text-indigo-700 cursor-pointer transition-colors duration-300">
              {project.name}
            </h3>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-indigo-700 transition-all duration-300 group-hover:w-full"></span>
          </div>
          <p className="text-gray-600 mb-4">{project.description.brief}</p>
          <UsedSkills skills={project.skills} />
          <div className="flex space-x-2 mt-2">
            <IconLink Icon={FaLink} link={project.link} ariaLabel="Project link" />
            <IconLink Icon={FaGithub} link={project.code} ariaLabel="GitHub code" />
          </div>
        </div>
      </div>
      {showOverlay &&
        createPortal(
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center ${
              exiting ? 'animate-fadeOutBackdrop' : 'animate-fadeInBackdrop'
            }`}
            onClick={handleClose}
          >
            <div
              className={`relative bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 px-6 py-4 ${
                exiting ? 'animate-zoomOut' : 'animate-zoomIn'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-5 text-gray-600 hover:text-black text-2xl"
                onClick={handleClose}
                aria-label="Close project overlay"
              >
                <IoClose className="cursor-pointer transition-colors duration-300" />
              </button>

              <div className="relative w-full aspect-video mb-2 rounded-md overflow-hidden mt-6">
                <Image
                  src={project.image}
                  alt={`${project.name} Full View`}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold mb-2 text-center text-indigo-700">
                {project.name}
              </h3>
              <div className="flex justify-between items-center">
                <div className="flex flex-wrap items-center gap-y-1 gap-x-2">
                  <UsedSkills skills={project.skills} />
                </div>
                <div className="flex space-x-2">
                  <IconLink Icon={FaLink} link={project.link} ariaLabel="Project link" />
                  <IconLink Icon={FaGithub} link={project.code} ariaLabel="GitHub code" />
                </div>
              </div>
              <p className="text-gray-700 whitespace-pre-line text-sm md:text-base">
                {project.description.long}
              </p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
