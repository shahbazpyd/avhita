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
    <section id="features" className="py-20 scrollspyHeading3">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-start mb-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          A Powerful Suite of Features
        </h2>
        <p className="text-gray-500">
         Our platform simplifies health data management into three intuitive steps. Click on each step to learn more about how we put you in control of your health information.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto features-grid py-6">
        
        {features.map((item, index) => (
          <div
            key={index}
            className="feature-card"
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