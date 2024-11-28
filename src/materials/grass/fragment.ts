export const fragmentShader = `
#define PI 3.1415926535897932384626433832795

precision mediump float;

uniform vec3 uColor;
uniform float uDensity;

uniform float uAmbientOcclusionAttenuation;
uniform float uAmbientOcclusionBias;

uniform float uShellCount;
uniform float uShellIndex;
uniform float uShellThickness;

uniform float uNoiseMin;
uniform float uNoiseMax;

uniform vec3 uLightDirection;

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
  vec2 newUV=textureCoordinates*uDensity;
  vec2 localUV=fract(newUV)*2.-1.;
  float localDistanceFromCenter=length(localUV);
  
  uint seed=uint(newUV.x+100.)*uint(newUV.y+100.)*10u;
  float rand=mix(uNoiseMin,uNoiseMax,hash(seed));
  
  float height=uShellIndex/uShellCount;
  bool outsideThickness=(localDistanceFromCenter)>(uShellThickness*(rand-height));
  
  if(outsideThickness&&(uShellIndex>1.))discard;
  
  float halfLambert=valveHalfLambert(normals,uLightDirection);
  
  vec4 finalColor=vec4(uColor*height*halfLambert,1.);
  
  float ambientOcclusion=pow(height,uAmbientOcclusionAttenuation);
  ambientOcclusion+=uAmbientOcclusionBias;
  ambientOcclusion=clamp(ambientOcclusion,0.,1.);
  finalColor=finalColor*ambientOcclusion;
  
  return finalColor;
}

void main(){
  
  vec4 finalColor=planeConfig();
  
  gl_FragColor=finalColor;
  
}
`;
