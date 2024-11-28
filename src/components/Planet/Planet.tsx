"use client";

import { useSceneControls } from "@/hooks";
import { Color, ShaderMaterial, Vector3 } from "three";
import { GrassMaterialProps, useAtmosphereMaterial } from "@/materials";
import { useCallback, useRef, useEffect } from "react";
import { Shell } from "./Shell";

export const Planet = () => {
  const { color, intensity, ...rest } = useSceneControls();

  const { ref: atmosphereMaterialRef } = useAtmosphereMaterial({
    color,
    intensity,
  });

  const getGrassMaterialProps = useCallback<
    (shellIndex: number) => GrassMaterialProps
  >(
    (shellIndex) => ({
      shellIndex,
      ambientOcclusionAttenuation: rest.aoAttenuation,
      ambientOcclusionBias: rest.aoBias,
      color: new Color(rest.grassColor),
      density: rest.density,
      lightDirection: new Vector3(
        rest.lightDirectionX,
        rest.lightDirectionY,
        rest.lightDirectionZ
      ),
      noiseMax: rest.noiseMax,
      noiseMin: rest.noiseMin,
      shellCount: rest.shellCount,
      shellCurvature: rest.shellCurvature,
      shellLength: rest.shellLength,
      shellThickness: rest.shellThickness,
      windSpeed: rest.windSpeed,
      windStrength: rest.windStrength,
    }),
    [
      rest.aoAttenuation,
      rest.aoBias,
      rest.density,
      rest.grassColor,
      rest.lightDirectionX,
      rest.lightDirectionY,
      rest.lightDirectionZ,
      rest.noiseMax,
      rest.noiseMin,
      rest.shellCount,
      rest.shellCurvature,
      rest.shellLength,
      rest.shellThickness,
      rest.windSpeed,
      rest.windStrength,
    ]
  );

  return (
    <>
      <mesh scale={rest.scale}>
        <sphereGeometry />
        <atmosphereMaterial ref={atmosphereMaterialRef} />
      </mesh>
      {Array.from({ length: rest.shellCount }).map((_unused, index) => (
        <Shell key={index} {...getGrassMaterialProps(index)} />
      ))}
    </>
  );
};
