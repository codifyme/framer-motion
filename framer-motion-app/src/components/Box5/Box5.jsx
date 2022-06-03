import React, {useState} from 'react';
import { motion, useAnimation} from "framer-motion"

export default function Box5() {

    const control=useAnimation()

    return (
    <div className="box-container">
        <button onClick={()=>{
            control.start({
                x:1500,
                transition:{duration:2}
            })
        }}>Move Right</button>
        
        <button>Move Left</button>
        <button>Circle</button>
        <button>Square</button>
        <button>Stop</button>
        
      <motion.div 
        className="box"
        animate={control}
        
      >
      
      </motion.div>
    </div>
  );
}