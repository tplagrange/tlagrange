import { MaterialNode } from "@react-three/fiber";
import { GrassMaterial } from "./GrassMaterial";
import { ShaderMaterial } from "three";

declare module "@react-three/fiber" {
  interface ThreeElements {
    grassMaterial: MaterialNode<ShaderMaterial, typeof GrassMaterial>;
  }
}

export * from "./GrassMaterial";
export * from "./useGrassMaterial";
