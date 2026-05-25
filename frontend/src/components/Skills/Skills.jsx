import React from "react";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaGithub,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiFirebase,
  SiPostgresql,
  SiVercel,
  SiWireshark,
} from "react-icons/si";

const SkillItem = ({ name, icon: Icon, color }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.05 }}
    className="bg-dark-card border border-white/5 p-4 rounded-xl flex flex-col items-center gap-3 group transition-all hover:border-neon-cyan/30 min-w-[100px]"
  >
    <div
      className={`text-3xl ${color} group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]`}
    >
      <Icon />
    </div>
    <span className="text-[9px] font-black uppercase tracking-tighter text-gray-500 group-hover:text-white">
      {name}
    </span>
  </motion.div>
);

const SkillGroup = ({ title, skills }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-4">
      <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-neon-cyan whitespace-nowrap">
        {title}
      </h3>
      <div className="h-[1px] w-full bg-linear-to-r from-neon-cyan/20 to-transparent"></div>
    </div>

    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
      {skills.map((skill, index) => (
        <SkillItem key={index} {...skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const sections = [
    {
      title: "Backend & Mobile",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
        { name: "Java", icon: FaJava, color: "text-[#007396]" },
        { name: "Android", icon: FaAndroid, color: "text-[#3DDC84]" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]" },
        { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
        { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
        { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "Framer", icon: SiFramer, color: "text-white" },
      ],
    },
    {
      title: "Infra & Tools",
      skills: [
        { name: "Docker", icon: FaDocker, color: "text-[#2496ED]" },
        { name: "Linux", icon: FaLinux, color: "text-white" },
        { name: "Vercel", icon: SiVercel, color: "text-white" },
        { name: "GitHub", icon: FaGithub, color: "text-white" },
        { name: "Wireshark", icon: SiWireshark, color: "text-[#1679A7]" },
      ],
    },
  ];

  return (
    <section
      id="especialidades"
      className="max-w-6xl mx-auto px-6 py-32 scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-2">
          Minhas{" "}
          <span className="text-neon-cyan neon-text">Especialidades</span>
        </h2>
        <div className="h-1 w-20 bg-neon-cyan"></div>
      </motion.div>

      <div className="space-y-16">
        {sections.map((section, index) => (
          <SkillGroup
            key={index}
            title={section.title}
            skills={section.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
