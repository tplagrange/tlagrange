"use client";

import { Color, Vector3 } from "three";

import { fragmentShader } from "./fragment";
import { vertexShader } from "./vertex";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

export const GrassMaterial = shaderMaterial(
  {
    uAmbientOcclusionAttenuation: 1.5,
    uAmbientOcclusionBias: 0.5,
    uColor: new Color("#69c7f2"),
    uDensity: 128,
    uLightDirection: new Vector3(1, 1, 1),
    uNoiseMax: 1,
    uNoiseMin: 0.69,
    uShellCount: 256,
    uShellCurvature: 10,
    uShellIndex: 0,
    uShellLength: 0.5,
    uShellThickness: 25,
    uTime: 0,
    uWindSpeed: 0.25,
    uWindStrength: 0.1,
  },
  vertexShader,
  fragmentShader
);

extend({ GrassMaterial });
