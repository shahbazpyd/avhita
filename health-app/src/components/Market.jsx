import chartImg from "../assets/market-chart.png"; // replace later

function Market() {
  return (
    <section className="py-20 bg-lightGray">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-start mb-12 px-6">
        <h2 className="text-3xl font-bold mb-4">
          The Market Opportunity
        </h2>
        <p className="text-gray-500">
         The digital health market is experiencing explosive growth, driven by a fundamental shift towards patient-centric care. Patients now demand tools that provide control, transparency, and convenience—Synapse Health is built to lead this transformation.
        </p>
      </div>

      {/* Chart Container */}
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="bg-white rounded-2xl p-6 shadow-md border border-borderGray">
          
          <img
            src={chartImg}
            alt="Market Growth Chart"
            className="w-full h-auto object-contain"
          />

        </div>

      </div>
    </section>
  );
}

export default Market;