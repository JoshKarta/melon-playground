import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { menuSlide, slide } from "@/constants/animations";
import Curve from "./curve";
import { navLinks } from "@/constants/nav-links";

export default function Nav() {
  const pathname = usePathname();

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-[100vh] bg-neutral-950 text-white fixed right-0 top-0 rounded-l-xl"
    >
      <div className="box-border h-full p-20 flex flex-col justify-between">
        {/* Nav link */}
        <div className="flex flex-col text-4xl mt-14 gap-2">
          {/* Nav header */}
          <div className="text-xs uppercase mb-4 text-neutral-300 border-b border-neutral-300">
            <p>Navigation</p>
          </div>

          {navLinks.map((data, index) => {
            return (
              <motion.div
                key={index}
                custom={index}
                variants={slide}
                initial="initial"
                animate="enter"
                exit="exit"
                className={`flex items-center duration-150 ease-in-out transition-all hover:!translate-x-4 hover:text-blue-700`}
              >
                <Link href={data.href}>{data.title}</Link>
              </motion.div>
            );
          })}
        </div>

        <div className="w-full flex justify-between text-xs gap-8">
          <a>Awwwards</a>
          <a>Instagram</a>
          <a>Dribble</a>
          <a>LinkedIn</a>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
