"use client";

import { Canvas } from "@react-three/fiber";
import { Planet } from "@components/Planet";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

export const Scene = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-background to-foreground">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={15}>
          <OrbitControls autoRotate={false} enableDamping />
        </PerspectiveCamera>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} color="red" />
        <Planet />
      </Canvas>
    </div>
  );
};
