import { motion, useAnimation } from "framer-motion";

export default function Box5() {
    const control = useAnimation()

  return (
    <div className="box-container">
      <button
        onClick={() => {
          control.start({
            x: 900,
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Move right
      </button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Move left
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: "50%",
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Make Circle
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: "0",
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Make Square
      </button>
      <button
        onClick={() => control.stop()}
      >Stop</button>
      <motion.div className="box1" animate={control}>
        <h1>Box 5</h1>
      </motion.div>
    </div>
  );
}
