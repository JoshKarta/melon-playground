"use client";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";
import React, { useState } from "react";

export default function About() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();

    setCount(count + 1);
  };

  return (
    <section id="user">
      <div className="container px-4 py-16 sm:px-6 lg:px-8 z-0">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative lg:z-0 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt=""
                src="https://images.pexels.com/photos/1251262/pexels-photo-1251262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="absolute inset-0 h-full w-full object-cover rounded-t-2xl lg:rounded-2xl !z-0"
              />
            </div>
          </div>

          <div className="relative flex items-center -z-10 bg-gray-100 rounded-b-2xl lg:rounded-bl-none lg:rounded-r-2xl">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100 rounded-l-2xl"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore, debitis.
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                beatae, magni dolores provident quaerat totam eos, aperiam
                architecto eius quis quibusdam fugiat dicta.
              </p>

              <button
                className={cn(
                  "rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white mt-8 disabled:bg-red-300 disabled:cursor-default cursor-pointer",
                  count < 1 && "animate-buttonheartbeat "
                )}
                onClick={handleClick}
                disabled={count >= 1}
              >
                PRESS ME PLEASE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
