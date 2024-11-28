"use client";

import { useSceneControls } from "@/hooks";
import { Color, Vector3 } from "three";
import { AtmosphereMaterial, AtmosphereMaterialProps } from "@/materials";
import { GrassMaterialProps } from "@/materials/grass";
import { useCallback, useMemo } from "react";
import { Shell } from "./Shell";

export const Planet = () => {
  const { color, intensity, ...rest } = useSceneControls();

  const atmosphereProps = useMemo<AtmosphereMaterialProps>(
    () => ({
      color: new Color(color),
      intensity: intensity,
    }),
    [color, intensity]
  );

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
      <mesh scale={1.6}>
        <sphereGeometry />
        <AtmosphereMaterial {...atmosphereProps} />
      </mesh>
      {Array.from({ length: rest.shellCount }).map((_unused, index) => (
        <Shell key={index} {...getGrassMaterialProps(index)} />
      ))}
    </>
  );
};
