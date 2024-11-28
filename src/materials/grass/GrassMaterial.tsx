"use client";

import { Color, ShaderMaterial, Vector3 } from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { useUniforms } from "@/hooks";

import { fragmentShader } from "./fragment";
import { vertexShader } from "./vertex";

export type GrassMaterialProps = {
  ambientOcclusionAttenuation: number;
  ambientOcclusionBias: number;
  color: Color;
  density: number;
  lightDirection: Vector3;
  noiseMax: number;
  noiseMin: number;
  shellCount: number;
  shellIndex: number;
  shellCurvature: number;
  shellLength: number;
  shellThickness: number;
  windSpeed: number;
  windStrength: number;
};

export const GrassMaterial = (props: GrassMaterialProps) => {
  const uniforms = useUniforms(props);

  const materialRef = useRef<ShaderMaterial | null>(null);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      if (materialRef.current.uniforms.time) {
        materialRef.current.uniforms.time = { value: clock.getElapsedTime() };
      } else {
        materialRef.current.uniforms.time = { value: clock.getElapsedTime() };
      }
    }
  });

  return (
    <shaderMaterial
      fragmentShader={fragmentShader}
      ref={materialRef}
      uniforms={uniforms}
      vertexShader={vertexShader}
    />
  );
};
