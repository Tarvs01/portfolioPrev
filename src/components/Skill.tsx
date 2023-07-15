import React, { useRef } from "react";
import { SkillsData } from "../types/types";
import { motion, useInView } from "framer-motion";

function Skill({ name, percent }: SkillsData) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="skill-cont">
      <div className="skill-words">
        <h4 className="skill-name">{name}</h4>
        <h4 className="skill-percent">{percent}</h4>
      </div>
      <div className="skill-line-cont">
        <motion.div
                  className="skill-line"
                  style={{width: `${percent}%`}}
          initial={{ width: `${percent}%` }}
          animate={{ width: [`${percent}%`, "0%"], }}
          transition={{ duration: 1, repeat: 4, times: [50, 100] }}
        ></motion.div>
      </div>
    </div>
  );
}

export default Skill;
