export default `

  varying vec2 vUv;
  uniform sampler2D u_tex;
  uniform float u_time;

  void main(void) {

    vec3 tex = texture2D(u_tex, vUv).rgb;
    gl_FragColor = vec4(sin(u_time), cos(u_time), .8, 1.0);


    vec2 uv = vUv; // In order to operate with vUv
    float frequency = 6.0;
    float amplitude = 0.015 * 0.2;
    float x = uv.y * frequency + u_time * .7; 
    float y = uv.x * frequency + u_time * .3;

    uv.x += cos(x+y) * amplitude * cos(y);
    uv.y += sin(x-y) * amplitude * cos(y);

    vec4 rgba = texture2D(u_tex, uv);
    gl_FragColor = rgba;

  }

`;


