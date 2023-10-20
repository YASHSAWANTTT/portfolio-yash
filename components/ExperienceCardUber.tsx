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
        src="https://media.licdn.com/dms/image/C4E0BAQEkVkTJ55npXA/company-logo_200_200/0/1622523040210?e=1706140800&v=beta&t=Lz-vHZcBS1BVHiI1go-ItXyag8TxvTwtxB6tdGHhLWU"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-semibold "> You're Wonderful Project; </h4>
        <p className="font-italic text-light mt-1"> Social Media Marketing Intern </p>
        
        <p className="uppercase py-5 text-gray-300"> August, 2020 - September, 2020 </p>
        <ul className="list-disc space-y-4 ml-5 text-lg overflow-scroll h-40">
          <li> Engaged in a comprehensive internship focused on social media marketing strategies and best practices.</li>
          <li> Successfully acquired knowledge and skills related to creating and curating content for social media platforms in a responsible manner.</li>
          <li> Gained hands-on experience in utilizing various social media channels to promote mental health advocacy initiatives. </li>
          <li> Collaborated with the marketing team to develop and implement effective social media campaigns that raised awareness about mental health issues.</li>
          <li> Learned the importance of ethical content creation and consumption, promoting positive and responsible use of social media platforms.</li>
          <li> Developed strong communication and interpersonal skills through interactions with team members and engaging with the online community.</li>
          <li> Assisted in analyzing social media metrics to track the performance of campaigns and optimize content for maximum impact.</li>
          <li> Contributed to crafting compelling and engaging content, fostering a supportive and informative online community for mental health awareness.</li>
        </ul>
      </div>
    </article>
  );
}
