"use client";
import React, { useEffect, useRef } from "react";
import HeaderStickyCursor from "./components/header";
import StickyCursor from "./components/sticky-cursor";

export default function Page() {
  const stickyElement = useRef(null);

  return (
    <div className="h-[100vh]">
      <HeaderStickyCursor ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
    </div>
  );
}
