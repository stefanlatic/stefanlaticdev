import { useEffect } from "react";

const WelcomeMessage = () => {

    useEffect(() => {
  const handleScroll = (e) => {
    if (e.deltaY > 0 && window.scrollY < 10) {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    }
  };

  window.addEventListener("wheel", handleScroll);

  return () => window.removeEventListener("wheel", handleScroll);
}, []);


    return (
        <>
        <div className="flex justify-between [@media(max-width:500px)]:block">
            <div className="pt-24 font-IBM [@media(max-width:500px)]:pr-[50px]">
            <div className="w-auto">
            <h1 className="text-right text-3xl sm:text-4xl md:text-6xl [@media(min-width:765px)]:text-5xl">Hi, I am Stefan!</h1>
            <h3 className="text-right   text-[14px]  sm:text-xl md:text-2xl  pt-2 text-[#e63946]">Frontend Web Developer</h3>
            </div>
            <p className="pl-[30px] text-[8px] [@media(min-width:400px)]:ml-[70px] sm:text-[12px] md:text-[14px] xl:text-[16px] pt-10 w-[200px] sm:w-[300px] md:w-[400px]">Passionate about code, design, and continuous learning in the world of web development.</p>
        </div>
        <div className="">
          <div className="flex justify-end">
            <img src="/mypicture.png" alt="Picture" className="animate-wiggle-2s  w-[150px] [@media(max-width:500px)]:pr-[30px] [@media(max-width:500px)]:pt-[10px]  [@media(min-width:500px)]:w-[140px] sm:w-[160px] md:w-[180px] [@media(min-width:800px)]:w-[200px] [@media(min-width:900px)]:w-[240px] [@media(min-width:1000px)]:w-[360px] [@media(min-width:1000px)]:mr-[60px]"></img>
        </div>
        </div>
        </div>
        </>
    )
}

export default WelcomeMessage;
