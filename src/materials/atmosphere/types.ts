import { MaterialNode } from "@react-three/fiber";
import { ShaderMaterial, Color } from "three";
import { AtmosphereMaterial } from "./AtmosphereMaterial";

declare module "@react-three/fiber" {
  interface ThreeElements {
    atmosphereMaterial: MaterialNode<
      ShaderMaterial,
      typeof AtmosphereMaterial & { isShaderMaterial: true }
    >;
  }
}

export type AtmosphereMaterialRef = MaterialNode<
  ShaderMaterial,
  typeof AtmosphereMaterial
> & { isShaderMaterial: true };

export interface AtmosphereMaterialUniforms {
  uniforms: { uColor: { value: Color }; uIntensity: { value: number } };
  isShaderMaterial: true;
}
