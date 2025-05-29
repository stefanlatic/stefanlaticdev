

const FirstProjectSection = () => {

    return (
        <>
        <section id="work"  className="flex px-[60px] space-x-40">
        <div className="ml-12">
         <img src="/evidenca-picture.png" alt="Evidenca" className="h-[500px] mb-20"></img>
         </div>
         <div className="w-[400px] mt-20 leading-[28px]">
            <h1 className="text-center text-3xl font-IBM mb-10">Evidenca</h1>
            <p className="text-center  font-IBM">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button onClick={() => {  window.open("https://www.evidenca.net", "_blank"); }} className=" font-IBM pt-[25px] text-3xl relative text-white hover:text-gray-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-800 after:transition-all after:duration-300 hover:after:w-full">Live app</button><br/>
            <button onClick={() => {  window.open("https://github.com/stefanlatic/evidenca.git", "_blank");}} className=" font-IBM text-3xl pt-[40px] relative text-white hover:text-gray-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-800 after:transition-all after:duration-300 hover:after:w-full">Learn more</button>
        </div>
        
         </section>
        </>
    )
}

export default FirstProjectSection;