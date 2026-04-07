import { useState, useEffect } from 'react';
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

const slides = [
  { image: hero1, title: "Your Personal Health\nCommand Center", subtitle: "Empower healthcare providers with predictive insights, seamless data integration, and proactive patient management." },
  { image: hero2, title: "Real-Time\nHealth Monitoring", subtitle: "Track patient vitals and health metrics in real-time with advanced AI-powered analytics." },
  { image: hero3, title: "Seamless\nData Integration", subtitle: "Connect all your healthcare systems with our unified platform for complete patient visibility." },
  { image: hero4, title: "Proactive\nPatient Management", subtitle: "Predict potential health issues before they occur and intervene early for better outcomes." },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen relative">
      {/* Carousel */}
      <div className="relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-[1]"></div>

        {/* Centered Content */}
        <div className="carousel-caption-centered">
          <div className="relative z-10 max-w-3xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6 whitespace-pre-line">
              {slides[currentSlide].title}
            </h1>

            <p className="text-gray-200 text-lg mb-8">
              {slides[currentSlide].subtitle}
            </p>

            <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:scale-105 transition-transform">
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
