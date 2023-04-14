import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactUs = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // check if any field is empty
    const { elements } = form.current;
    for (let i = 0; i < elements.length; i++) {
      if (!elements[i].value) {
        toast.error(`🤖 ${elements[i].name} field is required`);
        return;
      }
    }

    setIsSending(true);

    emailjs
      .sendForm(
        "service_8rrcbha",
        "template_yhp0y0f",
        form.current,
        "AzIxre3T52eRrB5vs"
      )
      .then(
        (result) => {
          toast.success("🤖 Message sent, thanks for reaching out!");
          console.log(result.text);
          setIsSending(false);
        },
        (error) => {
          toast.error("🤖 Error, please try again.");
          console.log(error);
          setIsSending(false);
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="pb-0 mb-0 text-3xl font-bold">Contact Me</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-screen max-w-lg p-16 shadow-xl"
      >
        <label className="py-1 my-1">Name</label>

        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className="px-4 py-2 border border-gray-300 rounded-md shadow-xl hover:scale-105 hover:text-yellow-300 form-input focus:outline-none focus:ring-2 focus:scale-105 focus:ring-emerald-300 focus:border-transparent"
        />

        <label className="py-1 my-1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          className="px-4 py-2 text-yellow-300 border border-gray-300 rounded-md shadow-xl hover:scale-105 form-input focus:outline-none focus:ring-2 focus:scale-105 focus:ring-emerald-300 focus:border-transparent"
        />

        <label className="py-1 my-1">Message</label>

        <textarea
          name="message"
          placeholder="Enter Message"
          className="px-4 py-2 text-yellow-300 border border-gray-300 rounded-md form-textarea hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent "
        />
        <br />
        <input
          type="submit"
          value={isSending ? "Sending..." : "Send"}
          className="w-full px-4 py-2 font-bold uppercase transition-all duration-150 rounded shadow-xl bg-transperent text-primary hover:bg-secondary/10 hover:text-accent outline active:bg-primary"
          disabled={isSending}
        />
      </form>
      <p className="py-1 my-1 shadow">
        or write us at dcryptoniun+folio@gmail.com
      </p>
    </div>
  );
};

export default ContactUs;
