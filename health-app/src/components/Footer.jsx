import logo from "../assets/logo-avhita.png";

function Footer() {
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
    <footer className="bg-dark text-white py-4 ">
      <div className="max-w-6xl mx-auto px-6 text-center ">
        {/* Logo */}
        {/* <div className="mb-8">
          <img src={logo} alt="avhita" className="h-10 cursor-pointer" onClick={() => scrollToSection('hero')} />
        </div> */}

        {/* Menu Items */}
        <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium text-white/90 mb-8">
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

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-gray-500 text-sm">© 2026 Avhita ECG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
