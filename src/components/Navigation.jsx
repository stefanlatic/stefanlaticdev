
const Navigation = () => {



    return (
        <>
        <div className=" flex font-IBM text-xl justify-end space-x-16 pr-12 py-6">
            <a
                href="/Stefan Latić CV.pdf" download className="text-white hover:text-gray-300 transition">
                Resume
            </a>

            <a href="#"
            onClick={(e) => {
                e.preventDefault();
                document.getElementById("work").scrollIntoView({ behavior: "smooth" });
            }}
            className="text-white hover:text-gray-300 transition"
            >
            Work
            </a>

         <a href="#"
            onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
            }}
            className="text-white hover:text-gray-300 transition"
            >
            Contact
            </a>
         <p>🇷🇸</p>
        </div>
        </>
    )
}

export default Navigation;