"use client";
import React from "react";
import { AceLabel } from "@/components/ui/ace-Label";
import { AceInput } from "@/components/ui/ace-Input";
import { cn } from "@/lib/utils";

export default function SignUpPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="grid place-content-center min-h-screen w-full">
      <div className="max-w-md w-full mx-auto shadow p-4 md:p-8 shadow-AceInput bg-white dark:bg-black border rounded-2xl">
        <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 text-center">
          Welcome
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center">
          Login to aceternity if you can because we don&apos;t have a login flow
          yet
        </p>
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <AceLabelAceInputContainer>
              <AceLabel htmlFor="username">Username</AceLabel>
              <AceInput id="username" placeholder="Tyler" type="text" />
            </AceLabelAceInputContainer>
          </div>
          <AceLabelAceInputContainer className="mb-4">
            <AceLabel htmlFor="email">Email Address</AceLabel>
            <AceInput
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
            />
          </AceLabelAceInputContainer>
          <AceLabelAceInputContainer className="mb-4">
            <AceLabel htmlFor="password">Password</AceLabel>
            <AceInput id="password" placeholder="••••••••" type="password" />
          </AceLabelAceInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>
          {/* 
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        
        <div className="flex flex-col space-y-4">
        <button
        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-AceInput bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
        type="submit"
        >
        <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
        GitHub
        </span>
        <BottomGradient />
        </button>
        <button
        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-AceInput bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
        type="submit"
        >
        <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
        Google
        </span>
        <BottomGradient />
        </button>
        <button
        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-AceInput bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
        type="submit"
        >
        <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
        OnlyFans
        </span>
        <BottomGradient />
        </button>
        </div> */}
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const AceLabelAceInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
