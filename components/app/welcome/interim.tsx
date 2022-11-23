import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import BlurImage from "@/components/shared/blur-image";
import { Logo } from "@/components/shared/icons";

export default function Interim({
  setState,
  staggerChildVariants,
}: {
  setState: Dispatch<SetStateAction<string>>;
  staggerChildVariants: any;
}) {
  return (
    <motion.div
      className="z-10 my-auto mx-5 flex flex-col items-center space-y-10 text-center sm:mx-auto"
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        show: {
          opacity: 1,
          scale: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 0.5, type: "spring" }}
    >
      <motion.div
        variants={staggerChildVariants}
        className="flex flex-col items-center space-y-5 text-center"
      >
        <Logo className="h-11 w-11" />
        <h1 className="font-display text-3xl font-semibold text-gray-800 transition-colors sm:text-4xl">
          Let's get started
        </h1>
      </motion.div>
      <motion.p
        className="text-gray-600 transition-colors sm:text-lg"
        variants={staggerChildVariants}
      >
        Have your own domain? Start creating branded short links for free.{" "}
        <br className="hidden sm:block" />
        Don't have one? Use the default{" "}
        <a
          className="text-gray-500 underline transition-colors hover:text-gray-700"
          target="_blank"
          rel="noreferrer"
          href="https://dyo.at"
        >
          dyo.at
        </a>{" "}
        domain to create short links.
      </motion.p>
      <motion.div
        variants={staggerChildVariants}
        className="grid w-full grid-cols-1 divide-y divide-gray-100 rounded-md border border-gray-200 bg-white md:grid-cols-2 md:divide-x"
      >
        <button
          onClick={() => setState("project")}
          className="flex flex-col items-center justify-center overflow-hidden p-5 transition-colors hover:bg-gray-50 md:p-10"
        >
          <BlurImage
            src="/_static/illustrations/shopping-call.svg"
            alt="No links yet"
            width={250}
            height={250}
            className="pointer-events-none -mt-8 -mb-3 w-48 sm:w-60"
          />
          <p>I have a domain</p>
        </button>
        <button
          onClick={() => setState("link")}
          className="flex flex-col items-center justify-center overflow-hidden p-5 transition-colors hover:bg-gray-50 md:p-10"
        >
          <BlurImage
            src="/_static/illustrations/call-waiting.svg"
            alt="No links yet"
            width={250}
            height={250}
            className="pointer-events-none -mt-8 -mb-3 w-48 sm:w-60"
          />
          <p>I don't have a domain</p>
        </button>
      </motion.div>
    </motion.div>
  );
}