import { ShaderMaterialParameters } from "three";

export interface CustomMaterialProps extends ShaderMaterialParameters {
    extensions?: {
        clipCullDistance: boolean;
        multiDraw: boolean;
    }
}   