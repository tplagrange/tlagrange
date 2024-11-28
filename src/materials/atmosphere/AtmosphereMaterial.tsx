"use client";

import {
  AdditiveBlending,
  BackSide,
  Color,
  ShaderMaterialParameters,
} from "three";

import { fragmentShader } from "./fragment";
import { vertexShader } from "./vertex";
import { useUniforms } from "@/hooks";

export type AtmosphereMaterialProps = {
  color: Color;
  intensity: number;
};

export const AtmosphereMaterial = (props: AtmosphereMaterialProps) => {
  const uniforms = useUniforms(props);
  return (
    <shaderMaterial
      blending={AdditiveBlending}
      fragmentShader={fragmentShader}
      side={BackSide}
      uniforms={uniforms as ShaderMaterialParameters["uniforms"]}
      vertexShader={vertexShader}
    />
  );
};
