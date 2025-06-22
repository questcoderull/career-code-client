import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{ y: [100, 150, 100] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="max-w-sm rounded-t-4xl rounded-br-4xl shadow-2xl border-s-8 border-b-8 border-blue-500"
          />

          {/* image 2 */}
          <motion.img
            src={team2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 9, repeat: Infinity }}
            // transition={{ duration: 9, delay: 5, repeat: Infinity }}
            className="max-w-sm rounded-t-4xl rounded-br-4xl shadow-2xl border-s-8 border-b-8 border-blue-500"
          />
        </div>

        <div className="flex-1">
          {/* <motion.h1
            animate={{
              rotate: 180,
              x: 200,
              y: -200,
              transition: { duration: 2 },
            }}
            className="text-5xl font-bold"
          >
            Latest Jobs for you!
          </motion.h1> */}

          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 3 } }}
            className="text-5xl font-bold"
          >
            Remote{" "}
            <motion.span
              animate={{
                color: [
                  "#ff5733",
                  "#ffc433",
                  "#22fc32",
                  "#2255fc",
                  "#e422fc",
                  "#fc22c7",
                ],
                transition: { duration: 3, repeat: Infinity },
              }}
            >
              Jobs
            </motion.span>{" "}
            for you!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
