function Features() {
  const features = [
    "Unified Health Record",
    "Provider Hub",
    "Predictive Intelligence",
    "Appointment Management",
    "Secure & Private",
    "Family & Caregiver Access",
  ];

  return (
    <section className="py-20 bg-white">
      
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          A Powerful Suite of Features
        </h2>
        <p className="text-gray-500">
          Designed to empower providers and patients with modern tools.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        
        {features.map((item, index) => (
          <div
            key={index}
            className="border border-borderGray rounded-xl p-6 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-gray-800">
              {item}
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Features;