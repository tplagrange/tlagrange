"use client";

import { useMemo } from "react";
import { ShaderMaterial } from "three";

export const useUniforms = (
  values: Record<string, unknown>
): NonNullable<ShaderMaterial["uniforms"]> => {
  const uniforms = useMemo(
    () =>
      Object.entries(values).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: { value },
        }),
        {} as ShaderMaterial["uniforms"]
      ),
    [values]
  );

  return uniforms;
};
