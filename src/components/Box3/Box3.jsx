import {motion } from "framer-motion";

export default function Box3() {
    const boxVariants = {
        hidden: {
            x: "-100vw"
        },
        visible: {
            x: 0,
            transition: {
              delay: 0.5,
              when: "beforeChildren"
            }
        }
    }
     const listVariants = {
       hidden: {
         x: -10,
         opacity: 0.1,
         delay: 1
       },
       visible: {
        x: 0,
        opacity: 1,
        stagerChildren: 0.7,
        transition: {
          stiffness: 100,
          duration: 0.5,
          velocity: -100,
        }
       },
     };
  return (
    <div className="box-container">
      <motion.div
        className="box1"
        variants={boxVariants}
        animate="visible"
        initial="hidden"
      >
        <h1>Box 3</h1>
        <div className="smallBoxes">
          {  [1, 2, 3, 4].map(box => {
                return (
                <motion.li key={box} 
                    className="boxItem "
                    variants={listVariants}
                    ></motion.li>
                )
            })}
        </div>
      </motion.div>
    </div>
  );
}