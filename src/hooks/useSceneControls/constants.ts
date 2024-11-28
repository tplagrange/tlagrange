export const defaultSettings = {
  grassyGeometry: {
    rotationSpeed: 0.01,
    grassColor: "#49df4b",
    density: 128,
  },
  atmosphere: {
    color: "#69c7f2",
    intensity: 0.5,
    scale: 1.6,
  },
  wind: {
    windSpeed: 0.25,
    windStrength: 0.1,
  },
  lighting: {
    lightDirection: { x: 1, y: 1, z: 1 },
    ambientOcclusion: {
      ambientOcclusionAttenuation: 1.5,
      ambientOcclusionBias: 0.5,
    },
  },
  shellTexturing: {
    shellCount: 256,
    shellCurvature: 10,
    shellLength: 0.5,
    shellThickness: 25,
    noiseMin: 0.69,
    noiseMax: 1.0,
  },
};
