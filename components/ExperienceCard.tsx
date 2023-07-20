"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[700px bg-[#292929] p-10] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden snap-center  p-1">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-30 h-30 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src="https://media.licdn.com/dms/image/C560BAQHDGjY1IZJuog/company-logo_200_200/0/1519855922217?e=2147483647&v=beta&t=Nmv0KQXFDNNB3SsmlXmekFE5m9aSWcnSggXS6_CFVkg"
        alt=""
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-2xl font-semibold "> Arizona State University </h4>
        <p className="font-italic text-light mt-1"> GCSP Program Aide </p>
        {/* <div className="flex space-y-2 my-2">
          <img className="h-10 w-10 rounded-full " src="" alt="" />
          <img className="h-10 w-10 rounded-full " src="" alt="" />
          <img className="h-10 w-10 rounded-full " src="" alt="" />
          <img className="h-10 w-10 rounded-full " src="" alt="" />
        </div> */}
        <p className="uppercase py-5 text-gray-300"> 2022 - present </p>
        <ul className="list-disc space-y-4 ml-5 text-lg overflow-scroll h-40">
          <li>Facilitate the effective management of the Grand Challenges Scholars Program (GSCP) website and student database at Arizona State University.</li>
          <li>Collaborate with program coordinators and IT professionals to develop, update, and enhance the GSCP website, ensuring an engaging and user-friendly online platform.</li>
          <li>Regularly update the website content, including program details, events, and resources, to provide current and relevant information for students and stakeholders. </li>
          <li>Ensure the accurate and confidential entry of student information into the database, adhering to data protection regulations and privacy standards.</li>
          <li>Work closely with the communications team to integrate website updates with social media channels, enhancing program visibility and engagement.</li>
          <li>Provide technical support and guidance to students, staff, and faculty, addressing website and database-related inquiries promptly and professionally.</li>
          
        </ul>
      </div>
    </article>
  );
}
