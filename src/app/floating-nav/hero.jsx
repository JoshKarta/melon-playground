import { ContainerScroll } from "@/components/container-scroll-animation";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="container" id="home">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`https://images.pexels.com/photos/1251262/pexels-photo-1251262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
