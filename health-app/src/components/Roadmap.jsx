function Roadmap() {
  const roadmap = [
    {
      year: "Q4 2025",
      title: "Public Launch",
      desc: "Release core platform with initial features and onboarding.",
    },
    {
      year: "Q2 2026",
      title: "Wearable Integration",
      desc: "Integrate with smart devices for real-time health tracking.",
    },
    {
      year: "Q4 2026",
      title: "Advanced Genetic Models",
      desc: "Enhance AI predictions with genetic data insights.",
    },
    {
      year: "2027",
      title: "Enterprise Expansion",
      desc: "Scale platform for hospitals and large healthcare systems.",
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-lightGray">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-start mb-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Our Strategic Roadmap
        </h2>
        <p className="text-gray-500">
          We utilize a freemium subscription model designed to onboard users easily while offering powerful premium features for those who want to fully unlock their health potential.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto px-6">
        
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

        <div className="space-y-16">
          
          {roadmap.map((item, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              
              {/* Card */}
              <div className="w-[45%] bg-white p-6 rounded-xl shadow-md border border-borderGray">
                <p className="text-sm text-primary font-semibold mb-1">
                  {item.year}
                </p>
                <h3 className="font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.desc}
                </p>
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Roadmap;