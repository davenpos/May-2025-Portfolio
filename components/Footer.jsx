'use client';
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
  }, []);

  return (
    <footer className="bg-white py-6 shadow-inner mt-8">
      <div className="container mx-auto px-6 text-center text-gray-600">
        <p>
          &copy; <span id="current-year"></span> Simeon Davenport. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
