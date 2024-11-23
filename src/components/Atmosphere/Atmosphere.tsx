import { AdditiveBlending, BackSide, Color } from "three";

const fragmentShader = `
precision mediump float;

uniform float intensity;
uniform vec3 color;

varying vec3 vertexNormal;

void main(){
  float computedIntensity=pow(intensity-dot(vertexNormal,vec3(0.,0.,1.)),2.);
  
  gl_FragColor=vec4(color,1.)*computedIntensity;
}
`;

const vertexShader = `
precision mediump float;

varying vec3 vertexNormal;

void main(){
  vertexNormal=normalize(normalMatrix*normal);
  gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);
}
`;

const defaultUniforms = {
  color: { value: new Color("blue") },
  intensity: { value: 12 },
};

export const Atmosphere = () => {
  return (
    <mesh>
      <sphereGeometry />
      <shaderMaterial
        blending={AdditiveBlending}
        fragmentShader={fragmentShader}
        side={BackSide}
        uniforms={defaultUniforms}
        vertexShader={vertexShader}
      />
    </mesh>
  );
};
