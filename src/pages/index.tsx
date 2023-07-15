
import Head from "next/head";
import Navbar from "~/components/navbar/Navbar";
import { motion } from "framer-motion";

const styles = {
  section:
    "responsiveSection flex flex-col justify-center items-center  min-h-[100vh] h-auto sm:h-[90%] pokusX",
  card__div: "cursor-pointer",
} as const;

export default function Home() {

  return (
    <>
      <Head>
        <title>Learn languages</title>
        <meta name="description" content="My evolution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="flex h-[95dvh] flex-col items-center justify-center bg-gradient-to-b from-[#000000] to-[#15162c]">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 5,
              ease: "easeOut",
            }}
            className={styles.card__div}
          >
            <h1 className="text-[10vw]">
              Learn <strong>languages</strong>
            </h1>

          </motion.div>


      </main>
    </>
  );
}
