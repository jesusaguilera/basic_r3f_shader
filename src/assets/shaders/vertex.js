export default `

  varying vec2 vUv;
  uniform float u_time;
  uniform float u_bend;
  float PI = 3.14159265359;

  void main(){

    vUv = uv;

    //  Increment size of image
    vUv = (uv - vec2(0.5)) * 0.9 + vec2(0.5);

    // Oscillating movement on y axis on fragment
    vUv.y += sin(u_time) * 0.02;

    vec3 pos = position;

    // Bend  wireframe
    pos.y += (sin(PI * uv.x) * u_bend * 0.5);
    // pos.y = pos.y + ((sin(uv.x * PI) * u_bend * 24.0) * 0.125);

    // Oscillating movement on y axis 
    pos.y += sin(u_time) * 1.5;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0 );
  }

`;
