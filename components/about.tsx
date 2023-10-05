"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I started programming at an early age. My interest in this field started from game development.{" "}
        I persued a degree in <span className="font-medium">Computer Science</span> which led me to a job{" "}
        in a multi-national company where I got into full-stack web development and built some amazing web apps{" "}
        with my team. I also learnt a lot about how the software industry and big companies operate.{" "}
        My core stack is{" "}
        <span className="font-medium">
          React, Next.js, TypeScript and JavaScript
        </span>
        . I am always looking to
        learn new technologies and contribute to open source. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games on my custom built Gaming PC. I love to travel and listen to the music.
      </p>
    </motion.section>
  );
}
