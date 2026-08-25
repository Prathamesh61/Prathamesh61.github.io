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

    const xRingTo = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3" });
    const yRingTo = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3" });

    const handleMouseMove = (e) => {
      xDotTo(e.clientX - 4);
      yDotTo(e.clientY - 4);
      xRingTo(e.clientX - 16);
      yRingTo(e.clientY - 16);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Hover effect on links and buttons
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.closest(".hvr-pop") ||
        target.closest(".hvr-grow-shadow")
      ) {
        gsap.to(ring, { scale: 1.5, borderColor: "#fffb1c", backgroundColor: "rgba(255, 251, 28, 0.1)", duration: 0.3 });
        gsap.to(dot, { scale: 0.5, backgroundColor: "#fffb1c", duration: 0.3 });
      }
    };

    const handleMouseOut = () => {
      gsap.to(ring, { scale: 1, borderColor: "rgba(51, 121, 181, 0.5)", backgroundColor: "transparent", duration: 0.3 });
      gsap.to(dot, { scale: 1, backgroundColor: "#3379b5", duration: 0.3 });
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          border: "2px solid rgba(51, 121, 181, 0.5)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          transform: "translate3d(0,0,0)",
          transition: "border-color 0.3s, background-color 0.3s",
        }}
      />
    </>
  );
};

export default CustomCursor;
