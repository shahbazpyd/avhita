import { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is Avhita ECG and who is it for?",
      answer:
        "Avhita ECG is designed for healthcare providers and patients to manage and analyze health data efficiently.",
    },
    {
      question: "Can I connect records from multiple providers?",
      answer:
        "Yes, our system integrates data across multiple providers into one unified platform.",
    },
    {
      question: "How does provider collaboration work?",
      answer:
        "Providers can securely share and access patient data in real time.",
    },
    {
      question: "Is my health data secure?",
      answer:
        "We use industry-grade encryption and compliance standards.",
    },
    {
      question: "How can predictive insights help me?",
      answer:
        "They help detect potential health risks early and improve outcomes.",
    },
  ];

  return (
    <section id="scrollspyHeading2" className="backgroundimg shadow-md hover:shadow-lg transition">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-start mb-12 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p>Quick answers about how Avhita ECG helps you centralize records, coordinate care, and stay proactive.</p>
      </div>

      {/* Accordion */}
      <div className="max-w-4xl mx-auto px-6 space-y-4">
        
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-card"
          >
            
            {/* Question */}
            <button
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
              className="w-full flex justify-between items-center p-5 text-left font-medium"
            >
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>

            {/* Answer */}
            <div
              className={`px-5 transition-all duration-300 ${
                activeIndex === index ? "max-h-40 pb-5" : "max-h-0"
              } overflow-hidden text-gray-500 text-sm`}
            >
              {faq.answer}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default FAQ;