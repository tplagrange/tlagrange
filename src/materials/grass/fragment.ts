export const fragmentShader = `
#define PI 3.1415926535897932384626433832795

precision mediump float;

uniform vec3 color;
uniform float density;

uniform float ambientOcclusionAttenuation;
uniform float ambientOcclusionBias;

uniform float shellCount;
uniform float shellIndex;
uniform float shellThickness;

uniform float noiseMin;
uniform float noiseMax;

uniform vec3 lightDirection;

varying vec2 textureCoordinates;
varying vec3 normals;

float hash(uint seed){
  seed=(seed<<13)^seed;
  float t=float((seed*(seed*seed*15731u+789221u)+1376312589u)&0x7fffffffu);
  return 1.-(t/1073741824.);
}

float dotClamped(vec3 a,vec3 b,float min,float max){
  float dotProduct=dot(a,b);
  return clamp(dotProduct,min,max);
}

float valveHalfLambert(vec3 normals,vec3 light){
  float normalsDotLight=dotClamped(normals,light,0.,1.)*.5+.5;
  return normalsDotLight*normalsDotLight;
}

vec4 planeConfig(){
  vec2 newUV=textureCoordinates*density;
  vec2 localUV=fract(newUV)*2.-1.;
  float localDistanceFromCenter=length(localUV);
  
  uint seed=uint(newUV.x+100.)*uint(newUV.y+100.)*10u;
  float rand=mix(noiseMin,noiseMax,hash(seed));
  
  float height=shellIndex/shellCount;
  bool outsideThickness=(localDistanceFromCenter)>(shellThickness*(rand-height));
  
  if(outsideThickness&&(shellIndex>1.))discard;
  
  float halfLambert=valveHalfLambert(normals,lightDirection);
  
  vec4 finalColor=vec4(color*height*halfLambert,1.);
  
  float ambientOcclusion=pow(height,ambientOcclusionAttenuation);
  ambientOcclusion+=ambientOcclusionBias;
  ambientOcclusion=clamp(ambientOcclusion,0.,1.);
  finalColor=finalColor*ambientOcclusion;
  
  return finalColor;
}

void main(){
  
  vec4 finalColor=planeConfig();
  
  gl_FragColor=finalColor;
  
}
`;
