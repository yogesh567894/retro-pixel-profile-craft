
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-5 left-5 z-50 pixel-border-enhanced cream-bg p-3 hover:scale-105 transition-transform"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-black" />
        ) : (
          <Menu className="w-6 h-6 text-black" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 cream-bg border-r-4 border-black z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="pt-20 px-6">
          <nav>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="pixel-font text-lg font-semibold text-black hover:text-orange-500 transition-colors w-full text-left underline-animation"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="pixel-font text-lg font-semibold text-black hover:text-orange-500 transition-colors w-full text-left underline-animation"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('achievements')}
                  className="pixel-font text-lg font-semibold text-black hover:text-orange-500 transition-colors w-full text-left underline-animation"
                >
                  Achievements
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="pixel-font text-lg font-semibold text-black hover:text-orange-500 transition-colors w-full text-left underline-animation"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="pixel-font text-lg font-semibold text-black hover:text-orange-500 transition-colors w-full text-left underline-animation"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('leadership')}
                  className="pixel-font text-lg font-semibold text-black hover:text-orange-500 transition-colors w-full text-left underline-animation"
                >
                  Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('resume')}
                  className="pixel-font text-lg font-semibold text-black hover:text-orange-500 transition-colors w-full text-left underline-animation"
                >
                  Resume
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="pixel-font text-lg font-semibold text-black hover:text-orange-500 transition-colors w-full text-left underline-animation"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
