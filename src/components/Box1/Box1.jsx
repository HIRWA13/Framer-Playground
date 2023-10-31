import { motion } from "framer-motion"

export default function Box1() {
  return (
    <div className="box-container">
        <motion.div className="box1"
                    animate={{ 
                        x: "900px"
                     }}
        >
            <h1>Box 1</h1>
        </motion.div>
    </div>
  )
}