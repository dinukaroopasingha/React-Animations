"use client";

import { useSpringValue, animated,useSpring } from "@react-spring/web";

// import {
//   useMotionValue,
//   useScroll,
//   useTransform,
//   useSpring,
//   motion,
//   useAnimation,
// } from "motion/react";
import React, {useEffect, useState} from "react";

export default function Home() {
  const [toggle,setToggle]=useState(false);

  const styles = useSpring({
      opacity:toggle ? 1:0,
      transform:toggle ? 'translateY(0px)' : 'translateY(-50px)',
        config: { duration: 500 },

  });

  return (
      <div style={{padding:'50px',textAlign:'center'}}>
          <button onClick={()=>setToggle(!toggle)}
                  style={{
              padding: '10px 20px',
              cursor: 'pointer',
              marginBottom: '20px',
          }}>
              Toggle Animation

          </button>
          <animated.div
          style={{...styles, backgroundColor: '#0070f3',
              color: 'white',
              padding: '20px',
              borderRadius: '10px',
              display: 'inline-block',}}>
              Hello, React-Spring with Next.js!

          </animated.div>
      </div>
  );
}
