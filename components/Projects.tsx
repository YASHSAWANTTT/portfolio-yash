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
                items-center justify-center p-20 md:p-44 h-screen snap-x 
                snap-mandatory"
        >
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW1dGr7TfCN174xzzHNqeHUwCRhbFvNdZ3gA&usqp=CAU"
            alt=""
          />

          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4-xl font-semibold text-center">
              <span className="underline decoration-[#708B75]/50 "></span>{" "}
              AutoSim || Machine Learning and Neural Networks
            </h4>
            <p className="text-lg text-center md:text-left ">
              "AutoSim" is a self-driving car simulation, I honed driving
              mechanics for realism, defined intricate environments, and
              simulated precision sensors like LiDAR. My project ensured robust
              collision detection, guaranteeing safety. The pinnacle was
              integrating neural networks for autonomous control, enabling
              real-time decision-making. "AutoSim" encapsulates my comprehensive
              expertise in autonomous driving, from mechanics to AI, charting a
              path toward the future of transportation.
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
            src = "data:image/png;base64,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"
            alt=""
            className="h-180 w-181"
          />

          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4-xl font-semibold text-center">
              <span className="underline decoration-[#708B75]/50 "></span>{" "}
              Covid-19 Tracker (Distracker) || React
            </h4>
            <p className="text-lg text-center md:text-left ">
              Distracker is the ultimate COVID-19 Tracker, powered by React JS
              and an integrated world map. Stay informed with real-time global
              insights on infections, recoveries, and trends. Empower yourself
              and your community with data-driven decision-making, and receive
              timely alerts for precautionary measures. Together, let's navigate
              toward a safer and healthier world with Distracker.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#708B75]/10 left-0 h-[500px] -skew-y-12 " />
    </motion.div>
  );
}

export default Projects;
