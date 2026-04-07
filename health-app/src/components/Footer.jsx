function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-primary">
            avhita
          </h2>
          <p className="text-gray-400 text-sm">
            Transforming healthcare through intelligent data and predictive
            insights.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Home</li>
            <li>Features</li>
            <li>How It Works</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">
            support@avhita.com
          </p>
          <p className="text-gray-400 text-sm">
            +91 98765 43210
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © 2026 Avhita. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;