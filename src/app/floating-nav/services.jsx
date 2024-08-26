"use client";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { cn } from "@/lib/utils";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from "@/components/motion-primitives/core/dialog";
import { PlusIcon } from "lucide-react";

export default function Services() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const ref = useRef(null);

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <section
      className="container mx-auto py-16 relative"
      ref={ref}
      id="services"
    >
      <div className="text-center max-w-3xl mx-auto mb-6">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Services we Deploy
        </h2>

        <p className="mt-4 text-gray-500 sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          dolores laborum labore provident impedit esse recusandae facere libero
          harum sequi.
        </p>
      </div>
      <BentoGrid>
        {items.map((item, i) => (
          // <BentoGridItem
          //   key={i}
          //   title={item.title}
          //   description={item.description}
          //   header={item.header}
          //   icon={item.icon}
          //   className={cn("border", i === 3 || i === 6 ? "md:col-span-2" : "")}
          // />
          <Dialog
            key={i}
            transition={{
              type: "spring",
              bounce: 0.05,
              duration: 0.25,
            }}
          >
            <DialogTrigger
              style={{
                borderRadius: "12px",
              }}
              className={cn(
                "flex w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 shadow-sm group/bento hover:shadow-md",
                i === 3 || i === 6 ? "md:col-span-2" : ""
              )}
            >
              <DialogImage
                src={item.header}
                alt=""
                className="h-48 w-full object-cover"
              />
              <div className="flex flex-row items-end justify-between p-2">
                <div className="space-y-1 group-hover/bento:translate-x-2 transition duration-200">
                  <div>{item.icon}</div>
                  <DialogTitle className="text-zinc-950 dark:text-zinc-50 font-medium">
                    {item.title}
                  </DialogTitle>
                  <DialogSubtitle className="text-zinc-700 dark:text-zinc-400 line-clamp-2 text-sm">
                    {item.description}
                  </DialogSubtitle>
                </div>
                <button
                  type="button"
                  className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
                  aria-label="Open dialog"
                >
                  <PlusIcon size={12} />
                </button>
              </div>
            </DialogTrigger>
            <DialogContainer>
              <DialogContent
                style={{
                  borderRadius: "24px",
                }}
                className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
              >
                <DialogImage
                  src={item.header}
                  alt=""
                  className="h-full w-full"
                />
                <div className="p-6">
                  <DialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50 font-medium">
                    {item.title}
                  </DialogTitle>
                  <DialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                    {item.description}
                  </DialogSubtitle>
                  <DialogDescription
                    disableLayoutAnimation
                    variants={{
                      initial: { opacity: 0, scale: 0.8, y: 100 },
                      animate: { opacity: 1, scale: 1, y: 0 },
                      exit: { opacity: 0, scale: 0.8, y: 100 },
                    }}
                  >
                    {item.description}
                  </DialogDescription>
                </div>
                <DialogClose className="text-red-500" />
              </DialogContent>
            </DialogContainer>
          </Dialog>
        ))}
      </BentoGrid>
    </section>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header:
      "https://images.pexels.com/photos/323933/pexels-photo-323933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // (
    //   <div className="w-full min-h-[6rem] h-full relative">
    //     <Image
    //       src={
    //       }
    //       alt=""
    //       fill
    //       className="object-cover rounded-xl"
    //     />
    //   </div>
    // )
    icon: (
      <IconClipboardCopy className="h-4 w-4 text-neutral-500 group-hover/bento:!text-sanity-red" />
    ),
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header:
      "https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //  (
    //   <div className="w-full min-h-[6rem] h-full relative">
    //     <Image
    //       src={
    //       }
    //       alt=""
    //       fill
    //       className="object-cover rounded-xl"
    //     />
    //   </div>
    // )
    icon: (
      <IconFileBroken className="h-4 w-4 text-neutral-500 group-hover/bento:!text-sanity-red" />
    ),
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header:
      "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //  (
    //   <div className="w-full min-h-[6rem] h-full relative">
    //     <Image
    //       src={
    //       }
    //       alt=""
    //       fill
    //       className="object-cover rounded-xl"
    //     />
    //   </div>
    // )
    icon: (
      <IconSignature className="h-4 w-4 text-neutral-500 group-hover/bento:!text-sanity-red" />
    ),
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header:
      "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //  (
    //   <div className="w-full min-h-[6rem] h-full relative">
    //     <Image
    //       src={
    //       }
    //       alt=""
    //       fill
    //       className="object-cover rounded-xl"
    //     />
    //   </div>
    // )
    icon: (
      <IconTableColumn className="h-4 w-4 text-neutral-500 group-hover/bento:!text-sanity-red" />
    ),
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header:
      "https://images.pexels.com/photos/2781195/pexels-photo-2781195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // (
    //   <div className="w-full min-h-[6rem] h-full relative">
    //     <Image
    //       src={
    //       }
    //       alt=""
    //       fill
    //       className="object-cover rounded-xl"
    //     />
    //   </div>
    // )
    icon: (
      <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500 group-hover/bento:!text-sanity-red" />
    ),
  },
];
