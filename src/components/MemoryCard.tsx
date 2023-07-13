import React from "react";
import { motion } from "framer-motion";

const styles = {
  container:
    "relative flex items-center justify-center  cursor-pointer group perspective border-[#881DF2]  border-2 rounded-3xl",
  cover: "preserve-3d group my-rotate-y-180 w-full h-full",
  cover__div: "w-full h-full flex items-center justify-center",
  cardBack:
    "absolute top-0 my-rotate-y-180 backface-hidden overflow-hidden rounded-3xl w-full h-full bg-black ",
  cardBack__div:
    "w-full h-full flex flex-col items-center justify-center text-gray-800",
  h2: "text-base md:text-xl xl:text-2xl p-2 sm:p-0",
  h3: "text-4xl xl:text-6xl",
} as const;

const MemoryCard = () => {
  const item = {
    eng: "hello",
    cz: "ahoj",
    click: true,
    check: true,
  };
  const fadeOut =
    item.check &&
    "opacity-0 transition-opacity duration-1000 delay-1000 ease-in-out";

  const handleClick = () => {
    console.log("click");
  };

  return (

      <motion.button
        className={styles.container}
        onClick={() => handleClick()}
        disabled={item.click}
      >
        <motion.div
          className={styles.cover}
          animate={{ rotateY: item.check ? 180 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div className={styles.cover__div}>
            <h2 className={styles.h2}>{item.cz ? item.cz : item.eng}</h2>
          </motion.div>
          <motion.div className={styles.cardBack}>
            <div className={styles.cardBack__div}>
              <h3 className={styles.h3}>👍</h3>
            </div>
          </motion.div>
        </motion.div>
      </motion.button>

  );
};

export default MemoryCard;
