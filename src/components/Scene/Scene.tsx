"use client";

import { Canvas } from "@react-three/fiber";
import { Planet } from "@components/Planet";

export const Scene = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#000" }}>
      <Canvas>
        <Planet />
      </Canvas>
    </div>
  );
};
