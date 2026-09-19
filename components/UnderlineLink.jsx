import { useState } from 'react';

export default function UnderlineLink({ text, link, a, children }) {
  const [isHovered, setIsHovered] = useState(false);
  const Element = a ? 'a' : 'div';

  const props = a
    ? {
        href: link,
        target: '_blank',
        rel: 'noreferrer',
      }
    : { onClick: link };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="mb-2 text-center">
      {children && (
        <Element
          {...props}
          className="group/image inline-block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span
            className={`block w-fit mx-auto transition-opacity duration-300 ${isHovered ? 'opacity-50' : ''}`}
          >
            {children}
          </span>
        </Element>
      )}

      <Element
        {...props}
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h3
          className={`text-2xl font-semibold text-indigo-600 cursor-pointer transition-colors duration-300 ${
            isHovered ? 'text-indigo-700' : ''
          }`}
        >
          {text}
        </h3>
        <span
          className={`absolute left-0 bottom-0 h-0.5 bg-indigo-700 transition-all duration-300 ${
            isHovered ? 'w-full' : 'w-0'
          }`}
        />
      </Element>
    </div>
  );
}
