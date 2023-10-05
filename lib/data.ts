import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import invaluable from "@/public/invaluable.png";
import xiangqi from "@/public/xiangqi.png";
import websiteBuilder from "@/public/website-builder.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelors in Computer Science",
    location: "FAST-NUCES",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a full-stack software engineer.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Full-Stack Software Engineer @ Arbisoft",
    location: "Mckinny, TX",
    description:
      "I worked as a full-stack software engineer where I was put on multiple projects but my main contribution was towards Frontend using React",
    icon: React.createElement(CgWorkAlt),
    date: "July 2020 - July 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Toronto, ON",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Redux, Node.js, HTML5, CSS",
    icon: React.createElement(FaReact),
    date: "July 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Invaluable",
    description:
      "An auction website with multiple categories. I worked as a full-stack developer on this project for 1.5 years.",
    tags: ["React", "Next.js", "TypeScript", "JavaScript", "Node.js", "SocketIO", "Redux"],
    imageUrl: invaluable,
  },
  {
    title: "Xiangqi",
    description:
      "A Multiplayer Chess Game. I was a full-stack engineer for 1.5 years. People can play with real players and bots.",
    tags: ["React", "JavaScript", "Python", "Flask", "Redux-Saga", "SocketIO"],
    imageUrl: xiangqi,
  },
  {
    title: "Website Builder",
    description:
      "A website builder where you can build your page using drag-drop responsive components. I was the lead Frontend engineer.",
    tags: ["React", "Next.js", "TypeScript", "Craft.js", "ChakraUI"],
    imageUrl: websiteBuilder,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "HTML",
  "CSS",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Python",
  "Flask",
  "Django",
  "SocketIO",
  "Algolia"
] as const;
