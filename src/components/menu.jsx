"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useMotionValueEvent } from "framer-motion";
import { useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { IconBurger } from "@tabler/icons-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                // layoutId ensures smooth animation
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border dark:border-white/[0.2] shadow-lg"
              >
                <motion.div
                  // layout ensures smooth animation
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Determine when to toggle the state
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 64 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest < 64 && isScrolled) {
      setIsScrolled(false);
    }
  });

  return (
    <nav className="w-full h-16 z-50 py-4 flex items-center sticky top-0">
      <motion.div
        // resets the state
        onMouseLeave={() => setActive(null)}
        initial={{ y: 0, width: "100%" }}
        animate={{ y: isScrolled ? 10 : 0, width: isScrolled ? "50%" : "100%" }}
        transition={{
          delay: 0.05,
          duration: 0.3,
          ease: "easeInOut",
          type: "just",
        }}
        className={cn(
          "container flex items-center justify-between py-2 rounded-full w-full relative",
          isScrolled ? "backdrop-blur-md shadow-lg border" : ""
        )}
      >
        <Link href={"/"} className="hover:scale-95">
          <img src="/next.svg" alt="" className="aspect-video w-16" />
        </Link>

        <div className="flex gap-10">{children}</div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-2">
          <ModeToggle />
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{ opacity: isScrolled ? 0 : 1, x: isScrolled ? 100 : 0 }}
            transition={{
              delay: 0.1,
              duration: 0.3,
              ease: "easeInOut",
              type: "just",
            }}
            exit={{
              opacity: isScrolled ? 0 : 1,
              x: isScrolled ? 100 : 0,
            }}
            className={cn(isScrolled ? "hidden" : "inline-block")}
          >
            <Button
              variant="ghost"
              className="hover:bg-transparent border border-transparent hover:border-secondary rounded-xl"
            >
              SignIn
            </Button>
          </motion.div>
          <Button variant="secondary" className="rounded-xl">
            Book a Call
          </Button>
        </div>

        {/* Mobile */}
        <div className="inline-block lg:hidden">
          <Button variant="icon">
            <IconBurger />
          </Button>
        </div>
      </motion.div>
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
