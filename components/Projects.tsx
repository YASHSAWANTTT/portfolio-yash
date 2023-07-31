"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
        snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#708B75]/80  "
      >
        <div
          className="w-screen flex-shrink-0 snap-centern flex flex-col space-y-5 
                items-center justify-center p-20 md:p-44 h-screen "
        >
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src="https://www.uber-assets.com/image/upload/v1538695540/iOS_App_Icon.png"
            alt=""
          />

          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4-xl font-semibold text-center">
              <span className="underline decoration-[#708B75]/50 "></span>{" "}
              SwiftRide (Uber Clone) || IOS Development
            </h4>
            <p className="text-lg text-center md:text-left ">
              Introducing SwiftRide, the ride-hailing app of the future, crafted
              with SwiftUI to elevate your transportation experience. With its
              user-friendly interface, SwiftRide allows you to effortlessly
              display your location on a responsive map view, enabling easy
              navigation.
            </p>
          </div>
        </div>

        <div
          className="w-screen flex-shrink-0 snap-centern flex flex-col space-y-5 
                items-center justify-center p-20 md:p-44 h-screen "
        >
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            // src="https://www.uber-assets.com/image/upload/v1538695540/iOS_App_Icon.png"
            alt=""
            className="h-180 w-181"
          />

          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4-xl font-semibold text-center">
              <span className="underline decoration-[#708B75]/50 "></span>{" "}
              Covid-19 Tracker (Distracker) || React
            </h4>
            <p className="text-lg text-center md:text-left ">
              GlobaTrace is the ultimate COVID-19 Tracker, powered by React JS
              and an integrated world map. Stay informed with real-time global
              insights on infections, recoveries, and trends. Empower yourself
              and your community with data-driven decision-making, and receive
              timely alerts for precautionary measures. Together, let's navigate
              toward a safer and healthier world with GlobaTrace.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#708B75]/10 left-0 h-[500px] -skew-y-12 " />
    </motion.div>
  );
}

export default Projects;
