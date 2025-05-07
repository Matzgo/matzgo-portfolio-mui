import React, { useRef, useEffect } from "react";

export default function BackgroundGame() {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null); // Track animation frame
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const boxImage1 = new Image();
    boxImage1.src = "/character.png";

    const boxImage2 = new Image();
    boxImage2.src = "/minotaur.png";

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
      animate();
    };

    window.addEventListener("resize", startAnimation);

    startAnimation(); // Initial start

    return () => {
      window.removeEventListener("resize", startAnimation);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

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
