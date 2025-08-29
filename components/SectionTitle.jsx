'use client';
import { useEffect, useRef, useState } from 'react';

export default function SectionTitle({ text, mb }) {
  const [visible, setVisible] = useState(false);
  const titleRef = useRef(null);
  const marginBottom = mb ? `mb-${mb}` : `mb-12`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <h2
      ref={titleRef}
      className={`text-4xl font-bold text-center text-gray-800 transition-all duration-700 ease-out transform ${marginBottom} ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {text}
    </h2>
  );
}
