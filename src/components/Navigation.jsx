import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
 // Zatvori meni kada se ekran poveća iznad 640px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Funkcija za zatvaranje menija pri klikovima na linkove
  const handleLinkClick = (callback) => (e) => {
    e.preventDefault();
    setIsOpen(false);
    callback?.(); // poziva se ako postoji funkcija scrollIntoView itd.
  };
  return (
    <>
      <nav className="relative flex font-IBM text-xl justify-end pr-12 py-10">
      {/* Desktop meni */}
      <ul className="hidden sm:flex space-x-[64px] text-2xl">
        <a
          href="/Stefan Latić CV.pdf"
          download
          className="relative text-white hover:text-gray-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-800 after:transition-all after:duration-300 hover:after:w-full"
        >
          Resume
        </a>

        <a
          href="#"
          onClick={handleLinkClick(() =>
            document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
          )}
          className="relative text-white hover:text-gray-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-800 after:transition-all after:duration-300 hover:after:w-full"
        >
          Work
        </a>

        <a
          href="#"
          onClick={handleLinkClick(() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          )}
          className="relative text-white hover:text-gray-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-800 after:transition-all after:duration-300 hover:after:w-full"
        >
          Contact
        </a>

        <p>🇷🇸</p>
      </ul>

      {/* Hamburger dugme */}
      <button className="sm:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobilni meni */}
      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-black/80 px-8 py-6 rounded-lg shadow-lg flex flex-col items-center space-y-4 text-white text-lg w-[90%] max-w-xs z-40">
          <a
            href="/Stefan Latić CV.pdf"
            download
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-300"
          >
            Resume
          </a>

          <a
            href="#"
            onClick={handleLinkClick(() =>
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
            )}
            className="hover:text-gray-300"
          >
            Work
          </a>

          <a
            href="#"
            onClick={handleLinkClick(() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            )}
            className="hover:text-gray-300"
          >
            Contact
          </a>

          <p>🇷🇸</p>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navigation;
