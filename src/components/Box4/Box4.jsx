import { motion } from "framer-motion";

export default function Box1() {
  return (
    <div className="box-container">
      <motion.div
        className="box1"
        animate={{
            scale: [1, 1.4, 1.4, 1, 1],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
            duration: 2
        }}
      >
        <h1>Box 4</h1>
      </motion.div>
    </div>
  );
}
