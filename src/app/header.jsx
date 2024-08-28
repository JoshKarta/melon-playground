"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconBurger } from "@tabler/icons-react";
import { useTransform } from "framer-motion";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import React, { useState, Fragment } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { navTransition } from "@/constants/animations";
import Link from "next/link";
import AnimatedBackground from "@/components/motion-primitives/core/animatedBackground";
import { AnimatePresence } from "framer-motion";

export const links = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Templates",
    list: [{ label: "Templates", href: "/templates" }],
  },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [menuId, setMenuId] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Determine when to toggle the state
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 64 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest < 64 && isScrolled) {
      setIsScrolled(false);
    }
  });

  console.log(menuId);
  return (
    <nav className="w-full h-16 z-50 py-4 flex items-center sticky top-0">
      <motion.div
        initial={{ y: 0, width: "100%" }}
        animate={{ y: isScrolled ? 10 : 0, width: isScrolled ? "50%" : "100%" }}
        transition={{
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

        {/* Desktop */}
        <div className="hidden lg:flex items-center">
          <AnimatedBackground
            defaultValue={links[0]}
            className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.3,
            }}
            enableHover={menuId ? false : true}
          >
            {links.map((link, index) => (
              <button
                key={index}
                data-id={link.label}
                type="button"
                onClick={(event) => {
                  const id = event.currentTarget.getAttribute("data-id");
                  setMenuId(id);
                }}
                className="px-2 py-0.5 font-medium transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 active:scale-[0.98] relative"
              >
                {link.label}
                <AnimatePresence>
                  {menuId && (
                    <motion.div
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 20 }}
                      exit={{ opacity: 0, y: 0 }}
                      transition={{ navTransition }}
                      className="border p-2 rounded-lg absolute"
                    ></motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </AnimatedBackground>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" className="hover:bg-transparent">
            SignIn
          </Button>
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
}
