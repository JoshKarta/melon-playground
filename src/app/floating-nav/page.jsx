"use client";
import {
  HomeIcon,
  UserIcon,
  FolderOpenIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { Dock, DockIcon } from "@/components/magicui/dock";
import React from "react";
import Header from "./header";
import Hero from "./hero";
import Trusted from "./trusted";
import About from "./about";
import Services from "./services";
import { MarqueeDemo } from "./marquee-demo";
import Pricing from "./pricing";
import Footer from "./footer";
import { scrollIntoView } from "@/lib/utils";

export default function page() {
  const icons = [
    { href: "home", icon: HomeIcon },
    {
      href: "user",
      icon: UserIcon,
    },
    { href: "services", icon: FolderOpenIcon },
    { href: "contact", icon: EnvelopeIcon },
  ];
  return (
    <div className="h-[300vh] relative">
      <Header />
      <Hero />
      <Trusted />
      <About />
      <Services />
      <Pricing />
      <MarqueeDemo />
      <Footer />

      {/* Dock */}
      <div className="bottom-5 inset-x-0 fixed">
        <Dock magnification={60} distance={100} className="bg-white">
          {icons.map((icon, i) => (
            <DockIcon
              className="bg-neutral-100 dark:bg-white/10 p-3 hover:bg-[#fb3b53]/10 hover:text-[#fb3b53]"
              key={i}
            >
              <button
                href={icon.href}
                onClick={() => scrollIntoView(icon.href)}
              >
                <icon.icon className="size-full" />
              </button>
            </DockIcon>
          ))}
        </Dock>
      </div>
    </div>
  );
}
