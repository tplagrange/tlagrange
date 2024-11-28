export const fragmentShader = `
precision mediump float;

uniform float uIntensity;
uniform vec3 uColor;

varying vec3 vertexNormal;

void main(){
  float computedIntensity=pow(uIntensity-dot(vertexNormal,vec3(0.,0.,1.)),2.);
  
  gl_FragColor=vec4(uColor,1.)*computedIntensity;
}
`;
