

const Footer = () => {

    return (
        <>
        <div className="flex jutify-center align-center">
                <div className="h-10 flex flex-row space-x-10">
                    <a href="https://github.com/stefanlatic" target="_blank">
    
                            <img src="/github-picture.png" className="h-10" alt="Github" />
                        
                    </a>

                    <a className="h-10" href="mailto:stefanlatic2002@gmail.com" target="_blank">
                        
                            <img src="/mail-picture.png"  className="h-10" alt="Gmail" />
                        
                    </a>
                </div>
                <div>
                    <p class="copyright">Stefan Latic ©2025</p>
                </div>
        </div>
        </>
    )
}

export default Footer;