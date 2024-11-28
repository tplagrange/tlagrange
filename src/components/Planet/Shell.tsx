"use client";

import { useGrassMaterial, UseGrassMaterialInput } from "@/materials";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export type ShellProps = UseGrassMaterialInput & {
  rotationSpeed?: number;
};

export const Shell = (props: ShellProps) => {
  const { rotationSpeed, ...rest } = props;

  const meshRef = useRef<Mesh>(null);
  const { ref } = useGrassMaterial(rest);

  useFrame((_, delta) => {
    if (meshRef?.current?.rotation) {
      meshRef.current.rotation.y += delta * (rotationSpeed ?? 1 / 16);
    }

    if (ref.current?.uniforms) {
      ref.current.uniforms.uTime.value += delta;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0, 0, Math.PI / 12]}>
      <sphereGeometry />
      <grassMaterial ref={ref} {...rest} />
    </mesh>
  );
};
