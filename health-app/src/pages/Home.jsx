import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProblemSolution from "../components/ProblemSolution";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Market from "../components/Market";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <Market />
      <Pricing />
      <Roadmap />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;