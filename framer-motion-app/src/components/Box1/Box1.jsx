import React from 'react';
import { motion } from "framer-motion"

export default function Box1() {
  return (
    <div className="box-container">
      <motion.div 
        className="box"
        animate={{
            x:500,
            opacity:1
      }}
      initial={{
          opacity:0.1
      }}
      transition={{
          type:"spring",
          stiffness:60

      }}
      >
      
      </motion.div>
    </div>
  );
}
