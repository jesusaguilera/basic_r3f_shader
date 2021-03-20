export default `

  varying vec2 vUv;
  uniform sampler2D u_tex;
  uniform float u_time;

  void main(void) {

    vec3 tex = texture2D(u_tex, vUv).rgb;
    gl_FragColor = vec4(sin(u_time), cos(u_time), .8, 1.0);
  }

`;
