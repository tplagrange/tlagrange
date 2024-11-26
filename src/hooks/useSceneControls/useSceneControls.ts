"use client";

import { folder, useControls } from "leva";

export const useSceneControls = () => {
  const controlOutput = useControls({
    grassyGeometry: folder({
      rotationSpeed: { value: 0.01, min: 0, max: 1, step: 0.01 },
      grassColor: { value: "#49df4b" },
      density: { value: 128, min: 1, max: 2048, step: 4 },
    }),

    atmosphere: folder({
      color: { value: "#69c7f2" },
      intensity: { value: 0.5, min: 0, max: 1, step: 0.01 },
      scale: { value: 1, min: 0, max: 10, step: 0.01 },
    }),
    wind: folder({
      windSpeed: { value: 0.25, min: 0, max: 1, step: 0.01 },
      windStrength: { value: 0.1, min: 0, max: 1, step: 0.01 },
    }),

    lighting: folder({
      lightDirectionX: { value: 1, min: -1, max: 1, step: 0.01 },
      lightDirectionY: { value: 1, min: -1, max: 1, step: 0.01 },
      lightDirectionZ: { value: 1, min: -1, max: 1, step: 0.01 },
      ambientOcclusion: folder({
        aoAttenuation: { value: 1.5, min: 0, max: 10, step: 0.01 },
        aoBias: { value: 0.5, min: 0, max: 1, step: 0.01 },
      }),
    }),

    shellTexturing: folder({
      shellCount: { value: 256, min: 1, max: 512, step: 4 },
      shellCurvature: { value: 10, min: 0, max: 100, step: 0.1 },
      shellLength: { value: 0.5, min: 0.01, max: 1, step: 0.01 },
      shellThickness: { value: 25, min: 1, max: 50, step: 1 },
      noiseMin: { value: 0.69, min: 0, max: 1, step: 0.01 },
      noiseMax: { value: 1.0, min: 0, max: 1, step: 0.01 },
    }),
  });

  return controlOutput;
};
