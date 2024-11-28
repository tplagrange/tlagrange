import { Color, ShaderMaterial, Vector3 } from "three";
import { useRef, useEffect, RefObject } from "react";

export type UseGrassMaterialInput = {
  ambientOcclusionAttenuation: number;
  ambientOcclusionBias: number;
  color: Color | string;
  density: number;
  lightDirection: Vector3 | { x: number; y: number; z: number };
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

type UseGrassMaterialOutput = {
  ref: RefObject<ShaderMaterial>;
};

export const useGrassMaterial = (
  input: UseGrassMaterialInput
): UseGrassMaterialOutput => {
  const {
    ambientOcclusionAttenuation,
    ambientOcclusionBias,
    color,
    density,
    lightDirection,
    noiseMax,
    noiseMin,
    shellCount,
    shellIndex,
    shellCurvature,
    shellLength,
    shellThickness,
    windSpeed,
    windStrength,
  } = input;

  const ref = useRef<ShaderMaterial>(null);

  useEffect(() => {
    if (!ref.current?.uniforms) return;

    ref.current.uniforms.uAmbientOcclusionAttenuation.value =
      ambientOcclusionAttenuation;
    ref.current.uniforms.uAmbientOcclusionBias.value = ambientOcclusionBias;
    ref.current.uniforms.uColor.value = new Color(color);
    ref.current.uniforms.uDensity.value = density;
    ref.current.uniforms.uLightDirection.value = new Vector3(
      lightDirection.x,
      lightDirection.y,
      lightDirection.z
    );
    ref.current.uniforms.uNoiseMax.value = noiseMax;
    ref.current.uniforms.uNoiseMin.value = noiseMin;
    ref.current.uniforms.uShellCount.value = shellCount;
    ref.current.uniforms.uShellIndex.value = shellIndex;
    ref.current.uniforms.uShellCurvature.value = shellCurvature;
    ref.current.uniforms.uShellLength.value = shellLength;
    ref.current.uniforms.uShellThickness.value = shellThickness;
    ref.current.uniforms.uWindSpeed.value = windSpeed;
    ref.current.uniforms.uWindStrength.value = windStrength;

    ref.current.needsUpdate = true;
  }, [
    ambientOcclusionAttenuation,
    ambientOcclusionBias,
    color,
    density,
    lightDirection,
    noiseMax,
    noiseMin,
    shellCount,
    shellIndex,
    shellCurvature,
    shellLength,
    shellThickness,
    windSpeed,
    windStrength,
  ]);
  return {
    ref,
  };
};
