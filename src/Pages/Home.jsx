import React, { useContext, useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Context } from "../App";
const Home = () => {
  const [dark] = useContext(Context);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const { scrollY } = useScroll();
  const y = useTransform(
    scrollY,
    [0, window.innerHeight],
    [0, -window.innerHeight]
  );
  const [text, setText] = useState("");
  const phrases = [
    " A MERN Stack Developer",
    "A Problem Solver",
    "A Front-end Developer",
  ];
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("typing");
  useEffect(() => {
    let charIndex = text.length;
    const typeInterval = setInterval(() => {
      if (phase === "typing") {
        if (charIndex < phrases[index].length) {
          setText(phrases[index].slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setPhase("pause");
        }
      } else if (phase === "erasing") {
        if (charIndex > 0) {
          setText(phrases[index].slice(0, charIndex - 1));
          charIndex--;
        } else {
          clearInterval(typeInterval);
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setPhase("typing");
        }
      }
    }, 100);
    if (phase === "pause") {
      const pauseTimeout = setTimeout(() => {
        setPhase("erasing");
      }, 1000);
      return () => clearTimeout(pauseTimeout);
    }
    return () => clearInterval(typeInterval);
  }, [text, phase, index, phrases]);
  return (
    <motion.div
      id="home"
      className={`h-screen flex flex-col justify-center items-center relative ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      {/* Fixed gradient background */}
      <motion.div
        style={{ y }}
        className={`fixed inset-0 ${
          dark
            ? "bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900"
            : "bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200"
        }`}
      ></motion.div>
      {/* Content */}
      <motion.h1
        className={`text-6xl font-bold mb-6 relative z-10 ${
          dark ? "text-white" : "text-gray-900"
        }`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        Hello, I am
        <motion.span
          className={`block text-7xl mt-4 ${
            dark ? "text-yellow-400" : "text-blue-600"
          }`}
          variants={itemVariants}
        >
          Eshita
        </motion.span>
      </motion.h1>
      <motion.div
        className={`text-4xl mt-4 font-medium relative z-10 ${
          dark ? "text-gray-100" : "text-gray-800"
        }`}
      >
        {text}
        <span className={`${dark ? "text-yellow-400" : "text-blue-600"}`}>
          |
        </span>
      </motion.div>
    </motion.div>
  );
};
export default Home;
