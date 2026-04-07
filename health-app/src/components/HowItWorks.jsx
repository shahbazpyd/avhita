import { Database, Users, TrendingUp } from "lucide-react";

function HowItWorks() {
  return (
    <section className="py-20 bg-lightGray">
      
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16 px-6">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-500">
          Our platform transforms fragmented healthcare data into actionable
          insights through a seamless and intelligent workflow.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition">
          <div className="mb-6">
            <Database className="text-primary w-10 h-10" />
          </div>
          <h3 className="text-lg font-semibold mb-3">
            Aggregate Your Data
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Securely collect and unify patient data from multiple healthcare
            systems into a single platform.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition">
          <div className="mb-6">
            <Users className="text-primary w-10 h-10" />
          </div>
          <h3 className="text-lg font-semibold mb-3">
            Connect Your Care Team
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Enable seamless communication between providers, ensuring
            coordinated and efficient patient care.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition">
          <div className="mb-6">
            <TrendingUp className="text-primary w-10 h-10" />
          </div>
          <h3 className="text-lg font-semibold mb-3">
            Activate Predictive Insights
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Use AI-powered analytics to identify risks early and improve
            patient outcomes proactively.
          </p>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;