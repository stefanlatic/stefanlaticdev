
const Navigation = () => {



    return (
        <>
        <div className=" flex font-IBM text-xl justify-end space-x-16 pr-12 py-6">
            <a
                href="/Stefan Latić CV.pdf" download className="relative text-white hover:text-gray-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-800 after:transition-all after:duration-300 hover:after:w-full">
                Resume
            </a>

            <a href="#"
            onClick={(e) => {
                e.preventDefault();
                document.getElementById("work").scrollIntoView({ behavior: "smooth" });
            }}
            className="relative text-white hover:text-gray-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-800 after:transition-all after:duration-300 hover:after:w-full"
            >
            Work
            </a>

         <a href="#"
            onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
            }}
            className="relative text-white hover:text-gray-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-800 after:transition-all after:duration-300 hover:after:w-full"
            >
            Contact
            </a>
         <p>🇷🇸</p>
        </div>
        </>
    )
}

export default Navigation;