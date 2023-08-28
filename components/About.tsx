"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://media.licdn.com/dms/image/D4D03AQHQFz1VCH7cLA/profile-displayphoto-shrink_400_400/0/1689805380591?e=1695254400&v=beta&t=sBNqbaAPjQtAuwMd5vrTF4iY18XuFmoiPv6kpUdE12I"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[400px]   "
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold ">
          here is a{" "}
          <span className="underline decoration-[#708B75]">backstory</span>
        </h4>
        <p className="text-base">Welcome to my world of bytes and algorithms! I'm Yash Ajay Sawant, a relentless explorer of the digital universe, pursuing a bachelor's in computer science at Arizona State University. As a junior, I find excitement in every line of code I write, and every bug I squash. Join me in this epic adventure, where innovation knows no bounds!</p>
      </div>
    </motion.div>
  );
}
