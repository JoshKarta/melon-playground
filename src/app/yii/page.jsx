"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

export default function page() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

const NavBar = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = (fileUrl) => {
    setDownloading(true);

    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        // extract filename from URL
        a.download = fileUrl.split("/").pop();
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        setDownloading(false);
      })
      .catch(() => setDownloading(false));
  };

  return (
    <nav className="container py-4 flex items-center justify-between">
      <Link href={"/yii"} className="font-medium hover:scale-95">
        Nextjs & Yii
      </Link>

      <div className="flex items-center gap-4">
        <Button asChild variant="link">
          <Link href={"/yii/signin"}>SignIn</Link>
        </Button>
        <Button asChild variant="link">
          <Link href={"/yii/signup"}>SignUp</Link>
        </Button>
      </div>

      <Button
        disabled={downloading}
        onClick={() => handleDownload("/favicon.png")}
      >
        Download
      </Button>
    </nav>
  );
};
