import { useState, useEffect } from 'react';
import logo from "../assets/logo-avhita.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "Vision", id: "vision" },
    { label: "How It Works", id: "howitworks" },
    { label: "Features", id: "features" },
    { label: "Opportunity", id: "market" },
    { label: "Business Model", id: "pricing" },
    { label: "Roadmap", id: "roadmap" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`sticky-top ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="p-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <img src={logo} alt="avhita" className="h-10 cursor-pointer" onClick={() => scrollToSection('hero')} />

          {/* Menu */}
          <ul className="hidden lg:flex gap-8 text-sm font-medium text-white/90">
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer hover:text-white transition-colors"
              >
                {item.label}
              </li>
            ))}
          </ul>

          {/* CTA */}
          {/* <button className="bg-white text-dark px-5 py-2 rounded-full text-sm font-medium shadow-md hover:scale-105 transition-transform">
            Join Waitlist
          </button> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
