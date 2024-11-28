export const fragmentShader = `
precision mediump float;

uniform float intensity;
uniform vec3 color;

varying vec3 vertexNormal;

void main(){
  float computedIntensity=pow(intensity-dot(vertexNormal,vec3(0.,0.,1.)),2.);
  
  gl_FragColor=vec4(color,1.)*computedIntensity;
}
`;
