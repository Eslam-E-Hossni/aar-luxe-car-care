"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Smoke from "./smoke";

const SmokeScene = () => {
  return (
    <Canvas camera={{ position: [0, -40, 0], fov: 20 }}>
      <ambientLight intensity={1} />
      <pointLight position={[0, 0, 0]} />
      <Smoke />
    </Canvas>
  );
};

export default SmokeScene;
