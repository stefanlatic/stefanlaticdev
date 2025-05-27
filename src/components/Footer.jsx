

const Footer = () => {

    return (
        <>
        <div className="py-6">
                <div className=" flex space-x-10">
                    <a href="https://github.com/stefanlatic" target="_blank"   rel="noopener noreferrer">
                            <img src="/github-picture.png" className="h-10" alt="GitHub" />
                    </a>

                    <a className="h-10" href="mailto:stefanlatic2002@gmail.com" target="_blank" rel="noopener noreferrer" >   
                            <img src="/mail-picture.png"  className="h-10" alt="Gmail" />
                    </a>

                    <a className="h-10" href="https://www.linkedin.com/in/stefan-latic-08b32021a/" target="_blank" rel="noopener noreferrer" >   
                            <img src="/linkedin-picture.png"  className="h-10" alt="LinkedIn" />
                    </a>
                </div>
                <div>
                    <p className="pt-6 text-center">Stefan Latić ©2025</p>
                </div>
        </div>
        </>
    )
}

export default Footer;