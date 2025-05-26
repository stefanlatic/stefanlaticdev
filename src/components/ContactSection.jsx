

const ContactSection = () => {

    return (
        <>
        <div className="flex flex-col pb-10 w-[500px]">
         <h1 className="font-IBM text-5xl mb-6">Contact me</h1>
         <input type="text" className="my-6 py-6 px-4 text-black font-IBM text-[20px] rounded-sm" placeholder="Name"></input>
         <input type="text" className="my-6 py-6 px-4 text-black font-IBM text-[20px] rounded-sm" placeholder="Email"></input>
         <textarea type="text" className="my-6 py-6 px-4 text-black font-IBM text-[20px] h-[250px] rounded-sm" placeholder="Message"></textarea>
         </div>
        </>
    )
} 

export default ContactSection;
