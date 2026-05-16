import React from "react";
import { motion } from "framer-motion";

const BeamCurve = ({ color, delay, duration, path }) => {
  return (
    <svg
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Linha de rastro (estática e bem clarinha) */}
      <path d={path} stroke={color} strokeOpacity="0.05" strokeWidth="1" />

      {/* Feixe de luz animado */}
      <motion.path
        d={path}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
        animate={{
          pathLength: [0.2, 0.2, 0.1], // Tamanho do feixe
          pathOffset: [0, 1], // Percorre o caminho de 0 a 100%
          opacity: [0, 1, 1, 0], // Surge e some
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          delay: delay,
          ease: "circIn",
        }}
        style={{
          filter: `drop-shadow(0 0 8px ${color})`, // Brilho neon intenso
        }}
      />
    </svg>
  );
};

export default BeamCurve;
