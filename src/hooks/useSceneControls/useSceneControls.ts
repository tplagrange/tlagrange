"use client";

import { folder, useControls } from "leva";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { defaultSettings } from "./constants";

export const useSceneControls = () => {
  const router = useRouter();

  const [controlOutput, setSettings] = useControls(() => ({
    grassyGeometry: folder({
      rotationSpeed: {
        value: defaultSettings.grassyGeometry.rotationSpeed,
        min: 0,
        max: 1,
        step: 0.01,
      },
      grassColor: { value: defaultSettings.grassyGeometry.grassColor },
      density: {
        value: defaultSettings.grassyGeometry.density,
        min: 1,
        max: 2048,
        step: 4,
      },
    }),
    atmosphere: folder({
      color: { value: defaultSettings.atmosphere.color },
      intensity: {
        value: defaultSettings.atmosphere.intensity,
        min: 0,
        max: 1,
        step: 0.01,
      },
      scale: {
        value: defaultSettings.atmosphere.scale,
        min: 0,
        max: 10,
        step: 0.01,
      },
    }),
    wind: folder({
      windSpeed: {
        value: defaultSettings.wind.windSpeed,
        min: 0,
        max: 1,
        step: 0.01,
      },
      windStrength: {
        value: defaultSettings.wind.windStrength,
        min: 0,
        max: 1,
        step: 0.01,
      },
    }),
    lighting: folder({
      lightDirection: {
        value: defaultSettings.lighting.lightDirection,
        min: { x: -1, y: -1, z: -1 },
        max: { x: 1, y: 1, z: 1 },
        step: 0.01,
      },
      ambientOcclusion: folder({
        ambientOcclusionAttenuation: {
          value:
            defaultSettings.lighting.ambientOcclusion
              .ambientOcclusionAttenuation,
          min: 0,
          max: 10,
          step: 0.01,
        },
        ambientOcclusionBias: {
          value: defaultSettings.lighting.ambientOcclusion.ambientOcclusionBias,
          min: 0,
          max: 1,
          step: 0.01,
        },
      }),
    }),
    shellTexturing: folder({
      shellCount: {
        value: defaultSettings.shellTexturing.shellCount,
        min: 1,
        max: 512,
        step: 4,
      },
      shellCurvature: {
        value: defaultSettings.shellTexturing.shellCurvature,
        min: 0,
        max: 100,
        step: 0.1,
      },
      shellLength: {
        value: defaultSettings.shellTexturing.shellLength,
        min: 0.01,
        max: 1,
        step: 0.01,
      },
      shellThickness: {
        value: defaultSettings.shellTexturing.shellThickness,
        min: 1,
        max: 50,
        step: 1,
      },
      noiseMin: {
        value: defaultSettings.shellTexturing.noiseMin,
        min: 0,
        max: 1,
        step: 0.01,
      },
      noiseMax: {
        value: defaultSettings.shellTexturing.noiseMax,
        min: 0,
        max: 1,
        step: 0.01,
      },
    }),
  }));

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const storedSettings = params.get("controls");
    if (storedSettings) {
      try {
        const parsedSettings = decodeBase64(storedSettings);
        setSettings(parsedSettings);
      } catch (e) {
        console.error("Failed to parse URL settings", e);
      }
    }
  }, [setSettings]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("controls", encodeBase64(controlOutput));
    router.replace(`?${params.toString()}`, undefined);
  }, [controlOutput, router]);

  return controlOutput;
};

const encodeBase64 = (data: Record<string, unknown>) =>
  btoa(JSON.stringify(data));
const decodeBase64 = (encoded: string) => JSON.parse(atob(encoded));
