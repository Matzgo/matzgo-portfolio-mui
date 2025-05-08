import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router

export default function BackgroundGame() {
  const location = useLocation(); // Get current route location
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null); // Track animation frame
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const footerRef = useRef(null); // Ref for the footer
  const isFooterVisible = useRef(false); // Track if the footer is visible
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const boxImage1 = new Image();
    boxImage1.src = "/backgroundGame/character.png";

    const boxImage2 = new Image();
    boxImage2.src = "/backgroundGame/minotaur.png";

    const bounceEase = (t) => t * t;

    const initializeBoxes = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      box1Ref.current = {
        x: -210,
        baseY: canvas.height - 100,
        width: 100,
        height: 100,
        speed: 0.5,
        amplitude: 5,
        frequency: 0.1,
      };

      box2Ref.current = {
        x: -60,
        baseY: canvas.height - 60,
        width: 60,
        height: 60,
        speed: 0.5,
        amplitude: 5,
        frequency: 0.12,
      };
    };

    const updateBaseY = () => {
      const footer = document.getElementById("footer"); // Select the footer element
      const box1 = box1Ref.current;
      const box2 = box2Ref.current;

      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();

        // Check if the footer is visible in the viewport
        isFooterVisible.current = footerRect.top < canvasRect.bottom;

        // Update the baseY to match the footer's top position if visible
        if (isFooterVisible.current) {
          const footerTopRelativeToCanvas = footerRect.top - canvasRect.top;

          box1.baseY = footerTopRelativeToCanvas - box1.height - 21;
          box2.baseY = footerTopRelativeToCanvas - box2.height - 21;
        } else {
          // Reset to default bottom position
          box1.baseY = canvas.height - 100;
          box2.baseY = canvas.height - 60;
        }
      }
    };

    const animate = () => {
      const box1 = box1Ref.current;
      const box2 = box2Ref.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const t2 = Math.abs(Math.sin(box2.x * box2.frequency));
      const bounce2 = -bounceEase(t2) * box2.amplitude;
      const y2 = box2.baseY + bounce2;

      if (boxImage2.complete) {
        ctx.drawImage(boxImage2, box2.x, y2, box2.width, box2.height);
      }
      box2.x += box2.speed;
      if (box2.x > canvas.width) box2.x = -box1.width;

      const t1 = Math.abs(Math.sin(box1.x * box1.frequency));
      const bounce1 = -bounceEase(t1) * box1.amplitude;
      const y1 = box1.baseY + bounce1;

      if (boxImage1.complete) {
        ctx.drawImage(boxImage1, box1.x, y1, box1.width, box1.height);
      }
      box1.x += box1.speed;
      if (box1.x > canvas.width) box1.x = -box1.width;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      cancelAnimationFrame(animationFrameRef.current);
      initializeBoxes();
      updateBaseY();
      animate();
    };

    const handleScroll = () => {
      updateBaseY();
    };

    window.addEventListener("resize", startAnimation);
    window.addEventListener("scroll", handleScroll);
    // Ensure the footer and canvas are fully initialized before updating baseY
    setTimeout(() => {
      updateBaseY(); // Initial baseY update
    }, 0);
    startAnimation(); // Initial start

    return () => {
      window.removeEventListener("resize", startAnimation);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  // Effect to handle route changes
  useEffect(() => {
    // When location changes, update the path and recalculate positions
    if (location.pathname !== currentPath) {
      setCurrentPath(location.pathname);

      // Give the DOM time to update after route change
      setTimeout(() => {
        if (canvasRef.current) {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext("2d");

          // Update canvas dimensions in case they changed
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          // Update the base Y position for the characters
          const footer = document.getElementById("footer");
          const box1 = box1Ref.current;
          const box2 = box2Ref.current;

          if (footer && box1 && box2) {
            const footerRect = footer.getBoundingClientRect();
            const canvasRect = canvas.getBoundingClientRect();

            isFooterVisible.current = footerRect.top < canvasRect.bottom;

            if (isFooterVisible.current) {
              const footerTopRelativeToCanvas = footerRect.top - canvasRect.top;
              box1.baseY = footerTopRelativeToCanvas - box1.height - 21;
              box2.baseY = footerTopRelativeToCanvas - box2.height - 21;
            } else {
              box1.baseY = canvas.height - 100;
              box2.baseY = canvas.height - 60;
            }
          }
        }
      }, 0); // Small delay to ensure DOM has updated
    }
  }, [location, currentPath]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
