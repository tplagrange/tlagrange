import { MaterialNode } from "@react-three/fiber";
import { ShaderMaterial } from "three";
import { AtmosphereMaterial } from "./AtmosphereMaterial";

declare module "@react-three/fiber" {
  interface ThreeElements {
    atmosphereMaterial: MaterialNode<ShaderMaterial, typeof AtmosphereMaterial>;
  }
}

export * from "./AtmosphereMaterial";
export * from "./useAtmosphereMaterial";
