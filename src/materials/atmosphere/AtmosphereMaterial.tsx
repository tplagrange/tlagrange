"use client";

import { AdditiveBlending, BackSide, Color } from "three";
import { extend } from "@react-three/fiber";
import { fragmentShader } from "./fragment";
import { vertexShader } from "./vertex";
import { shaderMaterial } from "@react-three/drei";

export const AtmosphereMaterial = shaderMaterial(
  {
    uColor: new Color("#69c7f2"),
    uIntensity: 0.5,
    blending: AdditiveBlending,
    side: BackSide,
  },
  vertexShader,
  fragmentShader
);

extend({ AtmosphereMaterial });
