"use client";
import React, { useRef, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
// import useClickOutside from "@/hooks/useClickOutside";
import { ArrowLeft, Search, User } from "lucide-react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ArrowRight } from "lucide-react";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const transition = {
  type: "spring",
  bounce: 0.1,
  duration: 0.2,
};

function Button({ children, onClick, disabled, ariaLabel }) {
  return (
    <button
      className={cn(
        "relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
      )}
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default function ToolbarDynamic() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useOutsideClick(containerRef, () => {
    setIsOpen(false);
  });

  return (
    <MotionConfig transition={transition}>
      <div ref={containerRef}>
        <div className="h-full w-full rounded-full border border-zinc-950/10 bg-white">
          <motion.div
            animate={{
              // @todo: here I want to remove the width
              width: isOpen ? "500px" : "52px",
            }}
            initial={false}
          >
            <div className="overflow-hidden p-2">
              {!isOpen ? (
                <div className="flex space-x-2">
                  {/* <Button disabled ariaLabel="User profile">
                    <User className="h-5 w-5" />
                  </Button> */}
                  <Button onClick={() => setIsOpen(true)} ariaLabel="email">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <Button onClick={() => setIsOpen(false)} ariaLabel="Back">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <div className="relative w-full overflow-hidden">
                    <input
                      className="h-9 w-full !rounded-l-3xl rounded-r-full border border-zinc-950/10 bg-transparent p-2 text-zinc-900 placeholder-zinc-500 focus:outline-none pr-14"
                      autoFocus
                      placeholder="email"
                    />
                    <button className="absolute right-1 top-1 px-2 py-1 bg-sanity-red rounded-full text-white font-medium hover:bg-sanity-red/75 text-sm">
                      Subscribe
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  );
}
