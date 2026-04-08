import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Animation = ({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  distance = 50,
  className = "",
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    // Direction logic
    let x = 0;
    let y = 0;
    if (direction === "up") y = distance;
    if (direction === "down") y = -distance;
    if (direction === "left") x = distance;
    if (direction === "right") x = -distance;

    const anim = gsap.fromTo(
      element,
      {
        opacity: 0,
        x: x,
        y: y,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: duration,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%", // Animation shuru hobe jokhon element viewport-er 85%-e ashbe
          toggleActions: "play none none none", // Ekbar-i animate hobe
        },
      },
    );

    return () => {
      anim.kill(); // Component unmount hole animation clean up hobe
    };
  }, [direction, delay, duration, distance]);

  return (
    <div ref={elementRef} className={`w-full ${className}`}>
      {children}
    </div>
  );
};

export default Animation;
