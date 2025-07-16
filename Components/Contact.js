"use client";
import { useState } from "react";

export default function Contact(){
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setStatus(data.message);
  };


  return(
    <div id="contact" className="container p-5 md:p-10">
        <div className="name text-center py-3 space-y-2">
                  <h2 className="text-[24px] md:text-[45px] text-white font-extrabold">Get In Touch</h2>
                  <p className="text-[14px] md:text-[14px] text-[#A78BFA] font-semibold">
                    Let's work together
                  </p>
          </div>
          <div className="name my-6 text-white text-center md:max-w-[793px] mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                  <div className="flex gap-4 w-full">
                      <input  type="text" name="name" placeholder="Full Name" onChange={handleChange} className="pl-4 py-3 rounded-xl w-[100%] md:w-[50%] text-white border border-white"/>
                      <input  type="email" name="email" placeholder="Email Address" onChange={handleChange} className="pl-4 py-3 rounded-xl w-[100%] md:w-[50%] text-white border border-white"/>
                  </div>
                   <textarea name="message" placeholder="Write Your Message......" className="pl-4  py-3 rounded-xl w-[100%] md:w-[100%] h-50  text-white border border-white" onChange={handleChange}></textarea>

                  <button type="submit" className="text-center rounded-xl py-3 w-[100%] hover:scale-102 transition-transform duration-300 md:text-[15px] nav-list hover:bg-[#A78BFA] text-[13px] border border-[#A78BFA]">Send Message</button>

                  {status && <p className="bg-[#dcfce7] border border-[#86efac] py-3 rounded-xl w-full text-center text-[#91929D]">{status}</p>}

               
                </form>
                 

          </div>

    </div>
  )
}