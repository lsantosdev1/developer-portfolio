import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BeamCurve = ({ color, delay, duration, path }) => {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detecta se o dispositivo é um iPhone, iPad ou iPod
    const checkIsIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    setIsIOS(checkIsIOS);
  }, []);

  // Se for iOS (iPhone/Safari), o React não renderiza o componente, poupando a memória do aparelho.
  // Se for Android ou Desktop, o código ignora esse 'if' e renderiza normalmente!
  if (isIOS) {
    return null;
  }

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
          pathLength: [0.2, 0.2, 0.1],
          pathOffset: [0, 1],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          delay: delay,
          ease: "circIn",
        }}
        style={{
          filter: `drop-shadow(0 0 8px ${color})`,
        }}
      />
    </svg>
  );
};

export default BeamCurve;
