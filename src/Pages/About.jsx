import React, { useContext } from "react";
import { motion } from "framer-motion";
import MobileRes from "../Components/MobileRes";
import data from "../../data/Data.json";
import dp from "../public/Images/IMg.jpg";
import divider from "../public/Lightmode/divider.png"; // Make sure to import the divider image
import { Context } from "../App";

const About = () => {
  const [dark] = useContext(Context);
  const mob = MobileRes();
  const viewport = document.documentElement.clientWidth;

  const cardVariants = {
    offscreen: { y: 180 },
    onscreen: {
      y: 50,
      opacity: 1,
      transition: { type: "tween", duration: 0.8 },
    },
  };

  return (
    <motion.div
      id="about"
      className="h-full text-center pt-16 sm:h-auto sm:pt-10 sm:mt-6"
      initial={viewport < 600 ? { opacity: 0, y: -40 } : "offscreen"}
      whileInView={viewport < 600 ? "" : "onscreen"}
      animate={
        viewport < 600
          ? { opacity: 1, y: 0, transition: { duration: 1.6 } }
          : ""
      }
      exit={viewport < 600 ? { opacity: 0, transition: { duration: 0.5 } } : ""}
      viewport={{ once: true, amount: 0.8 }}
    >
      <div
        style={
          mob.width > 1000 && mob.width < 1200
            ? { width: "90%", display: "block" }
            : {}
        }
        className="w-8/12 m-auto h-full sm:h-auto sm:w-10/12 md:w-[60%] md:grid"
      >
        <div
          style={mob.width > 1000 ? { width: "33.333333%" } : {}}
          className="w-4/12 float-left mr-5 sm:float-none sm:w-full md:m-auto md:w-8/12"
        >
          <img
            className={`shadow w-10/12 rounded-xl p-3 m-auto border-2 ${
              dark ? "border-white" : "border-black"
            }`}
            src={dp}
            alt="Profile"
          />
        </div>
        <motion.div
          id="aboutsection"
          className="text-left m-auto md:pt-8 sm:pt-16 sm:text-left transform -translate-y-14 pb-6"
          variants={cardVariants}
        >
          <h1
            className={`mb-3 text-2xl tracking-wider uppercase font-bold sm:mb-2 sm:text-center ${
              dark ? "text-yellow-400" : "text-blue-600"
            }`}
          >
            About Me
          </h1>
          <h1 className="font-extrabold text-6xl mb-5 sm:mb-3 sm:text-5xl sm:text-center">
            Eshita Bhawsar
          </h1>
          <p className="text-base leading-relaxed sm:h-full sm:text-sm sm:text-center">
            {data.details.des}
          </p>
        </motion.div>
      </div>

      {/* Separator div added at the bottom */}
      <div className="pt-10 mt-10 mb-4">
        <img
          className={`mx-[50%] h-40 ${dark && "border-r-2 border-gray-600"}`}
          src={divider}
          alt="Section divider"
        />
      </div>
    </motion.div>
  );
};

export default About;
