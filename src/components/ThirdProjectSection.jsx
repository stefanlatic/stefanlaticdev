

const ThirdProjectSection = () => {

    return (
        <>
        <div className="flex flex-col md:flex-row items-center px-6 md:px-[60px] space-y-10 md:space-y-0 md:space-x-40">
  {/* Slika */}
  <div className="md:ml-12 flex justify-center">
    <img
      src="/toDo-picture.png"
      alt="Evidenca"
      className="h-[250px] sm:h-[350px] md:h-[500px] mb-2 md:mb-10 xl:mb-20 object-contain"
    />
  </div>

  {/* Tekstualni deo */}
  <div className="w-full md:w-[400px] mt-10 md:mt-20 leading-[24px] sm:leading-[26px] md:leading-[28px]">
    <h1 className="text-center text-2xl sm:text-3xl font-IBM mb-6 sm:mb-10">To-Do App</h1>
    <p className="text-center font-IBM px-2 sm:px-4">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    </p>

    {/* Dugme Live App */}
    <button
      onClick={() => {
        window.open("https://react-todo-app-ashy-nine.vercel.app/", "_blank");
      }}
      className="font-IBM pt-8 text-xl sm:text-2xl md:text-3xl relative text-white hover:text-gray-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-800 after:transition-all after:duration-300 hover:after:w-full"
    >
      Live app
    </button>
    <br />

    {/* Dugme Learn more */}
    <button
      onClick={() => {
        window.open("https://github.com/stefanlatic/react-todo-app.git", "_blank");
      }}
      className="font-IBM pt-8 text-left text-xl sm:text-2xl md:text-3xl relative text-white hover:text-gray-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-800 after:transition-all after:duration-300 hover:after:w-full"
    >
      Learn more
    </button>
  </div>
</div>

{/* Dodatno dugme ispod */}
<div className="flex justify-center mt-10">
  <button
    onClick={() => {
      window.open("https://github.com/stefanlatic", "_blank");
    }}
    className="mb-10 md:mb-6 font-IBM text-left text-lg sm:text-xl relative text-white hover:text-gray-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-800 after:transition-all after:duration-300 hover:after:w-full"
  >
    More Projects
  </button>
</div>

        </>
    )
}

export default ThirdProjectSection;