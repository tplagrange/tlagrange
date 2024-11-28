"use client";

import { GrassMaterial, GrassMaterialProps } from "@/materials";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export type ShellProps = GrassMaterialProps;

export const Shell = (props: ShellProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      // Increment the rotation on the Y-axis
      meshRef.current.rotation.y += delta / 16;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0, 0, Math.PI / 12]}>
      <sphereGeometry />
      <GrassMaterial {...props} />
    </mesh>
  );
};
