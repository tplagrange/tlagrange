"use client";

import { useSceneControls } from "@/hooks";
import { useAtmosphereMaterial } from "@/materials";
import { Shell } from "./Shell";

export const Planet = () => {
  const { color, intensity, scale, ...rest } = useSceneControls();

  const { ref: atmosphereMaterialRef } = useAtmosphereMaterial({
    color,
    intensity,
  });

  return (
    <>
      <mesh scale={scale}>
        <sphereGeometry />
        <atmosphereMaterial ref={atmosphereMaterialRef} />
      </mesh>
      {Array.from({ length: rest.shellCount }).map((_unused, index) => (
        <Shell
          key={index}
          color={rest.grassColor}
          shellIndex={index}
          {...rest}
        />
      ))}
    </>
  );
};
