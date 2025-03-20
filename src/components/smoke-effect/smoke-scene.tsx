"use client";
import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Smoke from "./smoke";

const SmokeScene = () => {
  const [showSmokeEffect, setShowSmokeEffect] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setShowSmokeEffect(window.scrollY < 800);
      });
    }
  }, []);

  return showSmokeEffect ? (
    <Canvas camera={{ position: [0, -40, 0], fov: 20 }}>
      <ambientLight intensity={1} />
      <pointLight position={[0, 0, 0]} />
      <Smoke />
    </Canvas>
  ) : (
    <div>disabled smoke effect</div>
  );
};

export default SmokeScene;
