function Pricing() {
  return (
    <section className="py-20 bg-white">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-start mb-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Our Business Model
        </h2>
        <p className="text-gray-500">
         We utilize a freemium subscription model designed to onboard users easily while offering powerful premium features for those who want to fully unlock their health potential.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">

        {/* Free Tier */}
        <div className="pricing-card-free">
          <h3 className="text-xl font-semibold mb-4 text-center">Free Tier</h3>
          <p className="text-center">Perfect for getting started</p>
          <p className="text-3xl font-bold mb-6">$0</p>

          <ul className="space-y-3 mb-8">
            <li>✔ Basic health tracking</li>
            <li>✔ Limited data storage</li>
            <li>✔ Community support</li>
          </ul>

          <button className="w-full border border-primary text-primary py-3 rounded-full hover:bg-primary hover:text-white transition">
            Get Started
          </button>
        </div>

        {/* Premium Tier */}
        <div className="pricing-card-premium">
          <h3 className="text-xl font-semibold mb-4 text-center">Premium Tier</h3>
          <p className="text-center">Best for proactive health tracking</p>
          <p className="text-3xl font-bold mb-6">$14.99/mo</p>

          <ul className="space-y-3 mb-8">
            <li>✔ Unlimited records</li>
            <li>✔ AI insights</li>
            <li>✔ Priority support</li>
          </ul>

          <button className="w-full bg-white text-primary py-3 rounded-full font-medium hover:scale-105 transition">
            Upgrade Now
          </button>
        </div>

      </div>
    </section>
  );
}

export default Pricing;