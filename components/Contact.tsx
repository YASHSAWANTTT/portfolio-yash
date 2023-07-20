"use client";
import { motion } from "framer-motion";
import React from "react";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:yasawant@asu.edu?subject=${formData.subject}&body=Howdy, my name is ${formData.name}. ${formData.message}`;
  };
  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Let's Connect
      </h3>

      <div className="flex flex-col space-y-1">
        
        {/* <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center py-2">
            <PhoneIcon className="text-[#708B75] h-7 w-7 animate-pulse " />
            <p className="text-2xl"> +480-875-8668 </p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#708B75] h-7 w-7 animate-pulse " />
            <p className="text-2xl"> yasawant@asu.edu </p>
          </div>

          <div className="flex items-center space-x-5 justify-center py-2">
            <MapIcon className="text-[#708B75] h-7 w-7 animate-pulse " />
            <p className="text-2xl"> United States </p>
          </div>
        </div> */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2 ">
            <input
              {...register("name")}
              placeholder="Full Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Your Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#708B75] py-5 px-10 rouned-md text-black font-bold text-lg rounded-md "
          >
            {" "}
            submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
