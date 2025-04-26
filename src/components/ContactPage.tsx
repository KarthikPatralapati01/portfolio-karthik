"use client";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid"; 
import { useForm, SubmitHandler } from "react-hook-form";
import HomeButton from "./HomeButton";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:venkatakarthik.patralapati@sjsu.edu?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-[8px] uppercase text-gray-400">
        Contact
      </h2>
      <p className="text-lg text-center text-gray-300 mb-8 max-w-xl">
        Let&apos;s get in touch! Whether it&apos;s about a job opportunity, a collaboration, or just to say hi — I&apos;m happy to hear from you.
      </p>

      <div className="space-y-5 text-center mb-8 text-sm md:text-base">
        <div className="flex items-center gap-3 justify-center">
          <EnvelopeIcon className="text-green-400 h-6 w-6 animate-pulse" />
          <a
            href="mailto:venkatakarthik.patralapati@sjsu.edu"
            className="hover:text-green-400"
          >
            venkatakarthik.patralapati@sjsu.edu
          </a>
        </div>

        <div className="flex items-center gap-3 justify-center">
          <svg
            className="text-green-400 h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76..."></path>
          </svg>
          <a
            href="https://www.linkedin.com/in/pvk04/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            linkedin.com/in/pvk04
          </a>
        </div>

        <div className="flex items-center gap-3 justify-center">
          <PhoneIcon className="text-green-400 h-6 w-6 animate-pulse" />
          <span>+1 (408) 581-3187</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input {...register("name")} placeholder="Name" className="contactInput flex-1" />
          <input {...register("email")} placeholder="Email" className="contactInput flex-1" />
        </div>
        <input {...register("subject")} placeholder="Subject" className="contactInput w-full" />
        <textarea {...register("message")} placeholder="Message" className="contactInput w-full h-32" />
        <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-400 transition w-full font-bold">
          Submit
        </button>
      </form>

      <div className="absolute bottom-10">
        <HomeButton />
      </div>
    </div>
  );
}
