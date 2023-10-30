"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { tunnel } from "@/global";

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas
      {...props}
      camera={{
        fov: 45,
        position: [0, 40, 70],
        zoom: 2,
      }}
    >
      <tunnel.Out />
      <Preload all />
    </Canvas>
  );
}
