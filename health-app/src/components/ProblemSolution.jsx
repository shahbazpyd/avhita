function ProblemSolution() {
  return (
    <section id="vision" className="py-20 bg-white">

      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold">Avhita ECG</h2>
        <p className="text-gray-500 mt-2">
          Make a big impact with our Avhita Health professional slides and charts
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-3 gap-10">

        {/* LEFT - Problems */}
        <div className="text-right pr-10">
          <h3 className="text-xl font-bold text-red-500 mb-8">The Problem</h3>
          <div className="space-y-16">

          <div>
            <h3 className="font-semibold text-red-500">
              Fragmented Records
            </h3>
            <p className="text-gray-500 text-sm">
              Your health history is scattered across different doctors, hospitals, and labs, forcing you to start from scratch at every new visit.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-red-500">
              Patient Disempowerment
            </h3>
            <p className="text-gray-500 text-sm">
              Patients have little to no control over their own medical data. Accessing and sharing your complete chart is nearly impossible.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-red-500">
              Reactive, Not Proactive
            </h3>
            <p className="text-gray-500 text-sm">
              The system treats sickness, not wellness. We wait for symptoms instead of identifying risks before they become critical problems.
            </p>
          </div>
          </div>
        </div>

        {/* CENTER LINE */}
        <div className="relative flex justify-center">
          <div className="w-1 bg-gray-300 h-full"></div>

          {/* Dots */}
          <div className="absolute top-10 w-4 h-4 bg-primary rounded-full"></div>
          <div className="absolute top-1/2 w-4 h-4 bg-primary rounded-full"></div>
          <div className="absolute bottom-10 w-4 h-4 bg-primary rounded-full"></div>
        </div>

        {/* RIGHT - Solutions */}
        <div className="pl-10">
          <h3 className="text-xl font-bold text-green-600 mb-8">The Solution</h3>
          <div className="space-y-16">

          <div>
            <h3 className="font-semibold text-green-600">
              One Person, One Chart
            </h3>
            <p className="text-gray-500 text-sm">
              Your complete, lifelong health record, accessible anytime, anywhere. We centralize your entire medical history into one intuitive interface.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-600">
              Seamless Provider Sync
            </h3>
            <p className="text-gray-500 text-sm">
              Authorize providers to access and update your universal chart in real-time. No more redundant tests or lost information.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-green-600">
              Predictive & Proactive
            </h3>
            <p className="text-gray-500 text-sm">
              Our intelligent engine analyzes your health data to identify potential risks and empower you to make better-informed decisions.
            </p>
          </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProblemSolution;
