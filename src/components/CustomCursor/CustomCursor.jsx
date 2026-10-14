import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useGSAP(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    // quickTo is highly optimized for mouse followers
    const xDotTo = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3" });
    const yDotTo = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3" });

    const xRingTo = gsap.quickTo(ring, "x", { duration: 0.28, ease: "power3.out" });
    const yRingTo = gsap.quickTo(ring, "y", { duration: 0.28, ease: "power3.out" });

    const handleMouseMove = (e) => {
      xDotTo(e.clientX - 4);
      yDotTo(e.clientY - 4);
      xRingTo(e.clientX - 18);
      yRingTo(e.clientY - 18);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Click shockwave animation
    const handleMouseDown = () => {
      gsap.to(ring, {
        scale: 0.6,
        duration: 0.1,
        ease: "power2.in",
        onComplete: () => {
          gsap.to(ring, {
            scale: 1.8,
            opacity: 0.3,
            duration: 0.35,
            ease: "power2.out",
            onComplete: () => {
              gsap.to(ring, { scale: 1, opacity: 1, duration: 0.2 });
            },
          });
        },
      });
      gsap.to(dot, { scale: 1.6, duration: 0.15, yoyo: true, repeat: 1 });
    };

    window.addEventListener("mousedown", handleMouseDown);

    // Hover effect on links, buttons, and interactive cards
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.closest(".orbit-badge") ||
        target.closest(".tech-grid") ||
        target.closest(".card-glare-effect") ||
        target.closest(".hvr-pop") ||
        target.closest(".hvr-grow-shadow")
      ) {
        gsap.to(ring, {
          scale: 1.8,
          borderColor: "#fffb1c",
          backgroundColor: "rgba(255, 251, 28, 0.12)",
          boxShadow: "0 0 16px rgba(255, 251, 28, 0.5)",
          duration: 0.25,
        });
        gsap.to(dot, {
          scale: 0,
          opacity: 0,
          duration: 0.2,
        });
      }
    };

    const handleMouseOut = () => {
      gsap.to(ring, {
        scale: 1,
        borderColor: "rgba(51, 121, 181, 0.6)",
        backgroundColor: "transparent",
        boxShadow: "0 0 10px rgba(51, 121, 181, 0.2)",
        duration: 0.3,
      });
      gsap.to(dot, {
        scale: 1,
        opacity: 1,
        backgroundColor: "#3379b5",
        duration: 0.25,
      });
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  });

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          backgroundColor: "#3379b5",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate3d(0,0,0)",
          boxShadow: "0 0 8px #3379b5",
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "36px",
          height: "36px",
          border: "2px solid rgba(51, 121, 181, 0.6)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          transform: "translate3d(0,0,0)",
          boxShadow: "0 0 10px rgba(51, 121, 181, 0.2)",
          transition: "border-color 0.25s, background-color 0.25s, box-shadow 0.25s",
        }}
      />
    </>
  );
};

export default CustomCursor;
