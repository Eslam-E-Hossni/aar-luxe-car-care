"use client";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Smoke = () => {
  const smokeRef = useRef<THREE.Points>(null);

  // Create particle geometry and material
  const particles = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    // Generate random particle positions
    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * 400 - 200;
      const y = Math.random() * 400 - 200;
      const z = Math.random() * 400 - 200;
      vertices.push(x, y, z);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    // Create a material with a smoke-like texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/assets/images/smoke-default.png"); // Add a smoke texture
    const material = new THREE.PointsMaterial({
      size: 400,
      map: texture,
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    return { geometry, material };
  }, []);

  // Animate the smoke
  useFrame(({ clock }) => {
    if (smokeRef.current) {
      const time = clock.getElapsedTime();
      smokeRef.current.rotation.z = time * .02;
    }
  });

  return (
    <points
      ref={smokeRef}
      geometry={particles.geometry}
      material={particles.material}
    />
  );
};

export default Smoke;
