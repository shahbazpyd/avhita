import chartImg from "../assets/market-chart.png"; // replace later

function Market() {
  return (
    <section className="py-20 bg-lightGray">
      
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12 px-6">
        <h2 className="text-3xl font-bold mb-4">
          The Market Opportunity
        </h2>
        <p className="text-gray-500">
          The digital health market is experiencing explosive growth, driven
          by increasing demand for integrated patient care solutions.
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