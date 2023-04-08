import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8rrcbha",
        "template_yhp0y0f",
        form.current,
        "AzIxre3T52eRrB5vs"
      )
      .then(
        (result) => {
          toast("🤖 Message send, thanks for reaching out....");
          console.log(result.text);
        },
        (error) => {
          toast("🤖 error, Please try again....");
          console.log(error);
        }
      );
  };

  return (
    <div className=" flex flex-col justify-center items-center min-h-screen">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg   flex flex-col"
      >
        <label className="py-1 my-1">Name</label>

        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className="form-input text-yellow-300 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent shadow-xl"
        />

        <label className="py-1 my-1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          className="form-input text-yellow-300 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent shadow-xl"
        />

        <label className="py-1 my-1">Message</label>

        <textarea
          name="message"
          placeholder="Enter Message"
          className="form-textarea text-yellow-300 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent "
        />
        <br />
        <input
          type="submit"
          value="Send"
          className=" font-bold uppercase bg-transperent py-2 px-4 w-full   text-yellow-300 hover:bg-black/25 hover:text-emerald-300 outline rounded transition-all duration-150 active:bg-slate-800 shadow-xl "
        />
      </form>
      <p className="py-1 my-1 shadow">
        {" "}
        or write us at dcryptoniun+folio@gmail.com
      </p>
     
    </div>
  );
};

export default ContactUs;