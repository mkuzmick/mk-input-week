"use client";

import { GoogleGeminiEffect } from "@/components/GoogleGeminiEffect";
import Image from "next/image";


import React, { useEffect } from "react";
import { useMotionValue } from "framer-motion";

const ExampleComponent = () => {
      const pathLength1 = useMotionValue(0);
      const pathLength2 = useMotionValue(0);
      const pathLength3 = useMotionValue(0);
      const pathLength4 = useMotionValue(0);
      const pathLength5 = useMotionValue(0);

      useEffect(() => {
        // Example of updating the values based on some conditions
        const handleScroll = () => {
          const scrollY = window.scrollY;
          // Update the path lengths based on scroll position
          pathLength1.set(scrollY * 0.001); // Scale the scroll position to a value suitable for path length
          pathLength2.set(scrollY * 0.002);
          pathLength3.set(scrollY * 0.003);
          pathLength4.set(scrollY * 0.004);
          pathLength5.set(scrollY * 0.005);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [pathLength1, pathLength2, pathLength3, pathLength4, pathLength5]);

      const pathLengths = [pathLength1, pathLength2, pathLength3, pathLength4, pathLength5];

      return <GoogleGeminiEffect pathLengths={pathLengths} title="My Custom Title" description="This is a custom description." className="my-custom-class" />;
    };



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-7xl font-black text-cherry">mk sets and layouts</h1>
      <ExampleComponent />
    </main>
  );
}
