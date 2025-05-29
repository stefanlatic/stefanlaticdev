import './App.css';
import ContactSection from './components/ContactSection';
import FirstProjectSection from './components/FirstProjectSection';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import SecondProjectSection from './components/SecondProjectSection';
import SkillsSection from './components/SkillsSection';
import ThirdProjectSection from './components/ThirdProjectSection';
import WelcomeMessage from './components/WelcomeMessage';
import ParticlesBackground from './utils/ParticlesBackground'; 


function App() {
  return (
    <>

      <Navigation />
    <div className="relative h-screen overflow-hidden">
      <ParticlesBackground />
      <div className="relative z-10 px-[160px] pt-[40px]">
        <WelcomeMessage />
      </div>

    </div>
    <div
  onClick={() => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-20 flex w-20 h-20 flex items-center justify-center animate-bounce cursor-pointer rounded-full hover:bg-white/10 transition"
>
  <svg
    className="w-10 h-10 text-white pointer-events-none"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</div>

    <div>
      <FirstProjectSection /> 
    </div>
    <div>
      <SecondProjectSection />
    </div>
    <div>
      <ThirdProjectSection />
    </div>
    <div className='flex justify-center align-center'> 
      <SkillsSection />
    </div>
    <div className='flex justify-center '>
      <ContactSection />
    </div>
    <div className=" bg-[#303030] flex justify-center">
      <Footer />
    </div>
    </>
  );
}

export default App;
