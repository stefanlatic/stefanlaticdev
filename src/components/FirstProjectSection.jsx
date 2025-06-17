const FirstProjectSection = () => {

    return (
        <>
        <section id="work" className="flex flex-col md:flex-row items-center px-6 md:px-[60px] space-y-10 md:space-y-0 md:space-x-40 mt-10">
   <div className="flex justify-center md:ml-12">
    <img
      src="/evidenca-picture.png"
      alt="Evidenca"
      className="h-[250px] sm:h-[350px] md:h-[500px] mb-2 md:mb-10 md:mb-20 object-contain"
    />
  </div>

  <div className="w-full md:w-[400px] mt-10 md:mt-20 leading-[24px] sm:leading-[26px] md:leading-[28px]">
    <h1 className="text-center text-2xl sm:text-3xl font-IBM mb-6 sm:mb-10">Evidenca</h1>
    <p className="text-center font-IBM px-2 sm:px-4">
      A web app designed to simplify health data management. From login and charts to cleanly organized records - everything in one place! Go to Evidenca and organize your records and medicines now.
    </p>
    <button
      onClick={() => {
        window.open("https://www.evidenca.net", "_blank");
      }}
      className="font-IBM text-left pt-8 text-xl sm:text-2xl md:text-3xl relative text-white hover:text-gray-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-800 after:transition-all after:duration-300 hover:after:w-full"
    >
      Live app
    </button>
    <br />
    <button
      onClick={() => {
        window.open("https://github.com/stefanlatic/evidenca.git", "_blank");
      }}
      className="font-IBM text-left pt-8 text-xl sm:text-2xl md:text-3xl relative text-white hover:text-gray-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-800 after:transition-all after:duration-300 hover:after:w-full"
    >
      Learn more
    </button>
  </div>
</section>
        </>
    )
}

export default FirstProjectSection;