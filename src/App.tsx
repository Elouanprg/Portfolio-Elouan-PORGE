import Navbar from "./components/Navbar";
import BackgroundVideo from "./components/BackgroundVideo";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Formation from "./components/Formation";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark">
      <BackgroundVideo />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Experiences />
        <Formation />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
