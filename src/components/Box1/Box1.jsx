import { useState } from "react";
import { motion } from "framer-motion"

export default function Box1() {
    const [isAnimating, setIsAnimating] = useState(false)

  return (
    <div className="box-container">
      <motion.div
        className="box1"
        animate={{
          x: isAnimating ? 900 : 0, 
          opacity: isAnimating ? 1 : 0.3,
          rotate: isAnimating ? 360 : 0
        }}
        initial={{
          opacity: 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          //damping: 200// controls the speed of the transition
        }}
        onClick={() => setIsAnimating(!isAnimating)}
      >
        <h1>Box 1</h1>
      </motion.div>
    </div>
  );
}