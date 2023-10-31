import { motion } from "framer-motion";

export default function Box2() {

  return (
    <div className="box-container">
      <motion.div
        className="box1"
        drag
        dragConstraints={
            {
                top: -20,
                left: -20,
                right: 20,
                bottom: 20
            }
        }
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
        <h1>Box 2</h1>
      </motion.div>
    </div>
  );
}
