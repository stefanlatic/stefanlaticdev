import { useRef }  from "react";
import emailjs from 'emailjs-com';

const ContactSection = () => {

 const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_p7kx3rr',        
      'template_k7hnl5b',         
      form.current,
      'QG6Bvv9w-6J_iBUtA'         
    ).then(
      () => alert("Message sent!"),
      (error) => alert("Failed to send: " + error.text)
    );

    e.target.reset();
  };

    return (
        <>
        <form id="contact" ref={form} onSubmit={sendEmail} className="flex flex-col xl:w-[500px] md:w-[400px] sm:w-[300px]  mx-auto">
         <h1 className="font-IBM text-2xl md:text-3xl xl:text-4xl  mb-6">Contact me</h1>
         <input
        type="text"
        name="name"
        placeholder="Name"
        
        className="my-3 px-4 text-black font-IBM text-[14px] py-2 md:text-[18px] md:py-3 xl:text-[22px] xl:py-4 rounded-sm"
        required
      />
 <input
        type="email"
        name="email"
        placeholder="Email"
       
        className="my-3  px-4 text-black font-IBM text-[14px] py-2 md:text-[18px] md:py-3 xl:text-[22px] xl:py-4 rounded-sm"
        required
      />         
        <textarea
            name="message"
            placeholder="Message"
           
            className="my-3  px-4 text-black font-IBM text-[14px] py-2 md:text-[18px] md:py-3 xl:text-[22px] xl:py-4 h-[250px] rounded-sm"
            required
            >             
         </textarea>
         <button
            type="submit"
            className="bg-red-600 mb-[40px] mt-[10px] text-white py-1 text-[12px] md:py-2 md:text-[16px] px-4 rounded hover:bg-red-700 transition"
        >
            Send
         </button>
         </form>
        </>
    )
} 

export default ContactSection;
