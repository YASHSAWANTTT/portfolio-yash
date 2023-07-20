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
        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/362146064_212924134669968_1549921968132321081_n.jpg?stp=dst-jpg_s403x403&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=6t1NKY7MdJQAX_YC6BO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRBLdYlp86HQbBgGicqn2FpjZksoHesJGhbbE6P6NvBuA&oe=64E0A29D"
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
