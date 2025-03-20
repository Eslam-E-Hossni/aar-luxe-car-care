"use client";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Smoke = () => {
  const smokeRef = useRef<THREE.Points>(null);

  // Create particle geometry, material, and texture using useMemo
  const particles = useMemo(() => {
    const count = 200 ; // Number of particles

    // Create geometry
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const scales = []; // Store individual scales for each particle

    // Generate random particle positions and scales
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 100 - 50;
      const y = Math.random() * 100 - 50;
      const z = Math.random() * 100 - 50;
      vertices.push(x, y, z);

      // Randomize the initial scale of each particle
      scales.push(Math.random() * 0.5 + 0.5); // Scale between 0.5 and 1.0
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    geometry.setAttribute("scale", new THREE.Float32BufferAttribute(scales, 5));

    // Load smoke texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/assets/images/smoke-default.png"); // Use a smoke texture
    texture.minFilter = THREE.LinearFilter; // Optimize texture filtering

    // Create material with texture
    const material = new THREE.PointsMaterial({
      size: 400,
      map: texture, // Use the smoke texture
      transparent: true,
      opacity: 0.1 , // Lower opacity for a softer look
      depthWrite: false,
      blending: THREE.AdditiveBlending, // Additive blending for a glowing effect
    });

    return { geometry, material };
  }, []); // Empty dependency array ensures this runs only once

  // Animate the smoke
  useFrame(({ clock }) => {
    if (smokeRef.current) {
      const time = clock.getElapsedTime();

      // Get the position attribute
      const positions = smokeRef.current.geometry.attributes.position.array;

      // Update particle positions to simulate drifting smoke
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += Math.sin(time * 0.1 + i) * 0.1; // Drift horizontally
        positions[i + 1] += Math.cos(time * 0.1 + i) * 0.1; // Drift vertically
        positions[i + 2] += Math.sin(time * 0.05 + i) * 0.01; // Drift depth-wise
      }

      // Mark the position attribute as needing an update
      smokeRef.current.geometry.attributes.position.needsUpdate = true;

      // Rotate the entire smoke system
      smokeRef.current.rotation.z = time * 0.02;
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

export default React.memo(Smoke);
