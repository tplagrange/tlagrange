import { Ref, useEffect, useRef } from "react";
import { ShaderMaterial, Color } from "three";

export type UseAtmosphereMaterialInput = {
  color: Color | string;
  intensity: number;
};

export type UseAtmosphereMaterialOutput = {
  ref: Ref<ShaderMaterial>;
};

export const useAtmosphereMaterial = (
  input: UseAtmosphereMaterialInput
): UseAtmosphereMaterialOutput => {
  const { color, intensity } = input;

  const ref = useRef<ShaderMaterial>(null);

  useEffect(() => {
    if (!ref.current?.uniforms) return;

    ref.current.uniforms.uColor.value = new Color(color);
    ref.current.uniforms.uIntensity.value = intensity;
    ref.current.needsUpdate = true;
  }, [color, intensity]);

  return {
    ref,
  };
};
