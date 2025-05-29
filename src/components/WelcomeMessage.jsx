
const WelcomeMessage = () => {

    return (
        <>
        <div className="flex justify-between">
            <div className="pt-24 font-IBM">
            <h1 className="text-6xl">Hi, I am Stefan!</h1>
            <h3 className="text-2xl px-24 pt-2 text-[#e63946]">Frontend Web Developer</h3>
            <p className="text-md pt-10 w-[500px]">Passionate about code, design, and continuous learning in the world of web development.</p>
        </div>
        <div>
            <img src="/mypicture.png" alt="Picture" className="h-[400px] animate-wiggle-2s"></img>
        </div>
        </div>
        </>
    )
}

export default WelcomeMessage;
