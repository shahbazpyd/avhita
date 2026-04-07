function Pricing() {
  return (
    <section className="py-20 bg-white">
      
      {/* Heading */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Our Business Model
        </h2>
        <p className="text-gray-500">
          Flexible pricing designed for individuals and healthcare providers.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        
        {/* Free Tier */}
        <div className="border border-borderGray rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-4">Free Tier</h3>
          <p className="text-3xl font-bold mb-6">$0</p>

          <ul className="space-y-3 text-gray-500 mb-8">
            <li>✔ Basic health tracking</li>
            <li>✔ Limited data storage</li>
            <li>✔ Community support</li>
          </ul>

          <button className="w-full border border-primary text-primary py-3 rounded-full">
            Get Started
          </button>
        </div>

        {/* Premium Tier */}
        <div className="bg-primary text-white rounded-2xl p-8 shadow-lg scale-105">
          <h3 className="text-xl font-semibold mb-4">Premium Tier</h3>
          <p className="text-3xl font-bold mb-6">$14.99/mo</p>

          <ul className="space-y-3 mb-8">
            <li>✔ Unlimited records</li>
            <li>✔ AI insights</li>
            <li>✔ Priority support</li>
          </ul>

          <button className="w-full bg-white text-primary py-3 rounded-full font-medium">
            Upgrade Now
          </button>
        </div>

      </div>
    </section>
  );
}

export default Pricing;