"use client";
import React, { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast"
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({ user_name: "", user_email: "", message: "" });
  const [error, setError] = useState({ user_name: "", user_email: "", message: "" });
  const { toast } = useToast();
  
  useEffect(() => {
    console.log(error);
  }, [error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
    ...prevData,
      [name]: value,
    }));
    setError((prevError) => ({ ...prevError, [name]: "" })); // Clear error when user types
  };

  const validateFields = () => {
    const newErrors = {};

    if (!/^[a-zA-Z\s\-]{2,50}$/.test(formData.user_name)) {
      newErrors.user_name =
        "Name must be 2-50 characters and only letters, spaces, or hyphens.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      newErrors.user_email = "Please enter a valid Email address.";
    }

    if (formData.message.length < 10 || formData.message.length > 500) {
      newErrors.message =
        "Message must be between 10 and 500 characters.";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!validateFields()) {
      return; 
    }
     
    try {
      // await emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, e.target, {
      //   publicKey:process.env.NEXT_PUBLIC_PUBLIC_KEY,
      // });
      toast ({
        varint:"outline",
        title:"Email sent successfully!",
        description:"Thanks for getting in touch with us."
      })
      setFormData({user_name: "", user_email: "", message: "" });
      document.querySelector("form").reset();
        } catch (error) {
      console.log(error);
      toast ({
        varint:"destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      })
    }
   
  };

  return (
    <div className="my-12">
      <form className="mb-24" onSubmit={handleSubmit}>
        <div className="line w-1/2 border border-t text-light dark:text-[#ffffe3] dark:border-[#323228] mx-[10rem]"></div>
        <div className="mx-[10rem] w-1/2 mb-14">
          <div className="mt-5">
            <div className="flex">
              <p className="dark:text-[#323228] font-semibold mx-3 text-[1rem]">01</p>
              <h1 className="font-semibold text-light dark:text-[#ffffe3] text-[1.2rem] ml-8">
                What&#39;s your user_name?
              </h1>
            </div>
            <div className="mt-3 ml-[4.5rem]">
              {error.user_name && (
                <p className="mb-2 text-red-500 transition-all duration-150 ease-in">
                  {error.user_name}
                </p>
              )}
              <input
                onChange={handleChange}
                type="text"
                name="user_name"
                id="user_name"
                placeholder="John Doe *"
                autoComplete="off"
                className="w-[20rem] p-1 bg-transparent outline-none dark:placeholder:text-[#323228] placeholder:font-bold dark:text-[#ffffe3]"
                required
              />
            </div>
          </div>
        </div>

        <div className="line w-1/2 border border-t text-light dark:text-[#ffffe3] dark:border-[#323228] mx-[10rem]"></div>
        <div className="mx-[10rem] w-1/2 mb-14">
          <div className="mt-5">
            <div className="flex">
              <p className="dark:text-[#323228] font-semibold mx-3 text-[1rem]">02</p>
              <h1 className="font-semibold text-light dark:text-[#ffffe3] text-[1.2rem] ml-8">
                What&#39;s your user_email?
              </h1>
            </div>
            <div className="mt-3 ml-[4.5rem]">
              {error.user_email && <p className="text-red-500">{error.user_email}</p>}
              <input
                onChange={handleChange}
                type="text"
                name="user_email"
                id="user_email"
                placeholder="john@doe.com *"
                autoComplete="off"
                className="w-[20rem] p-1 bg-transparent outline-none dark:placeholder:text-[#323228] placeholder:font-bold dark:text-[#ffffe3]"
                required
              />
            </div>
          </div>
        </div>

        <div className="line w-1/2 border border-t text-light dark:text-[#ffffe3] dark:border-[#323228] mx-[10rem]"></div>
        <div className="mx-[10rem] w-1/2">
          <div className="mt-5">
            <div className="flex">
              <p className="dark:text-[#323228] font-semibold mx-3 text-[1rem]">03</p>
              <h1 className="font-semibold text-light dark:text-[#ffffe3] text-[1.2rem] ml-8">
                What&#39;s your message?
              </h1>
            </div>
            <div className="mt-3 ml-[4.5rem]">
              {error.message && <p className="text-red-500">{error.message}</p>}
              <textarea
                onChange={handleChange}
                name="message"
                id="message"
                placeholder="Message *"
                autoComplete="off"
                className="resize-none w-[90%] h-[10rem] p-1 bg-transparent outline-none dark:placeholder:text-[#323228] placeholder:font-bold dark:text-[#ffffe3]"
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mx-[12rem] dark:bg-[#ffffe3] dark:text-[#0e100f] bg-[#505052] text-gray-100 hover:scale-[1.1] ease-out transition-all duration-200 p-2 px-6 font-bold rounded-full mt-1"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
