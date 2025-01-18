"use client";

import { useTransform, motion, useScroll } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Transformations based on scroll progress
  const x = useTransform(scrollYProgress, [0, 0.5], [0, 500]); // Move from 0px to 500px in x-axis
  const y = useTransform(scrollYProgress, [0.5, 1], [0, 500]); // Move from 0px to 500px in y-axis
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]); // Scale from 1 to 1.3

  //   if you want to make animations work together....
  //     const x = useTransform(scrollYProgress, [0, 1], [0, 500]);
  //     const y = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <div style={{ height: "200vh" }}>
      <motion.div
        className="fixed" // set position to fixed is necessary to animation stood still
        style={{
          width: 100,
          height: 100,
          backgroundColor: "blue",
          x, // Apply x transformation
          y, // Apply y transformation
          scale, // Apply scale transformation
        }}
      />
    </div>
  );
}
