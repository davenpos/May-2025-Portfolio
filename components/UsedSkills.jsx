'use client';
import getLogo from '@/functions/getLogo';
import useWindowSizeState from '@/hooks/useWindowSizeState';
import { useState, useEffect, useReducer } from 'react';
import { createPortal } from 'react-dom';

const defaultTooltip = {
  visible: false,
  text: '',
  x: 0,
  y: 0,
};

const reducer = (tooltip, action) => {
  switch (action.type) {
    case 'ENTER':
      return {
        ...tooltip,
        visible: true,
        text: action.text,
      };
    case 'MOVE':
      return {
        ...tooltip,
        x: action.x,
        y: action.y,
      };
    default:
      return {
        ...tooltip,
        visible: false,
      };
  }
};

export default function UsedSkills({ skills }) {
  const [tooltip, dispatch] = useReducer(reducer, defaultTooltip);
  const [mounted, setMounted] = useState(false);
  const size = useWindowSizeState(20, 25);

  useEffect(() => setMounted(true), []);

  return (
    <div className="relative">
      <div className="flex flex-wrap space-x-1">
        {skills.map((skill) => {
          const [colorClasses, Icon] = getLogo(skill);
          return (
            <span
              key={skill}
              className={`p-1 mb-1 rounded-full ${colorClasses}`}
              onMouseEnter={() =>
                dispatch({
                  type: 'ENTER',
                  text: skill,
                })
              }
              onMouseMove={(e) =>
                dispatch({
                  type: 'MOVE',
                  x: e.clientX + 10,
                  y: e.clientY + 10,
                })
              }
              onMouseLeave={() => dispatch({ type: 'LEAVE' })}
            >
              <Icon size={size} />
            </span>
          );
        })}
      </div>
      {mounted &&
        createPortal(
          <div
            className="pointer-events-none fixed z-50 px-2 py-1 text-xs md:text-sm bg-black text-white rounded transition-opacity duration-300"
            style={{
              top: tooltip.y,
              left: tooltip.x,
              opacity: tooltip.visible ? 0.8 : 0,
            }}
          >
            {tooltip.text}
          </div>,
          document.body,
        )}
    </div>
  );
}
