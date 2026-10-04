"use strict";exports.id=486,exports.ids=[486],exports.modules={1022:(e,r,o)=>{o.d(r,{e:()=>n,m:()=>i});var t=o(687);function i({safety:e,onConnectStaff:r,onContinue:o,onDismiss:i}){return(0,t.jsxs)("div",{style:{background:"var(--color-kairo-charcoal)",border:"1px solid color-mix(in srgb, var(--color-warning) 30%, transparent)",borderRadius:"16px",padding:"1.5rem",display:"flex",flexDirection:"column",gap:"1rem",animation:"fade-up 0.4s ease forwards"},role:"alert","aria-live":"assertive",children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:"0.75rem"},children:[(0,t.jsx)("div",{style:{width:32,height:32,borderRadius:"8px",background:"color-mix(in srgb, var(--color-warning) 12%, transparent)",border:"1px solid color-mix(in srgb, var(--color-warning) 35%, transparent)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",flexShrink:0},children:"⚠"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:"0.625rem",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--color-warning)",marginBottom:"0.25rem"},children:"Safety Handoff"}),(0,t.jsx)("div",{style:{fontSize:"0.9375rem",fontWeight:500,color:"var(--color-kairo-offwhite)",lineHeight:1.5},children:"I can help with product information, but I can't diagnose or recommend treatment."}),(0,t.jsx)("div",{style:{fontSize:"0.875rem",color:"var(--color-kairo-subtle)",marginTop:"0.375rem",lineHeight:1.5},children:"A qualified healthcare professional should help with this."})]})]}),(0,t.jsxs)("div",{style:{padding:"0.75rem",background:"var(--color-kairo-surface)",border:"1px solid var(--color-kairo-border)",borderRadius:"8px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:"0.75rem",color:"var(--color-kairo-muted)"},children:"Reason"}),(0,t.jsx)("span",{style:{fontSize:"0.8125rem",fontWeight:600,color:"var(--color-kairo-subtle)"},children:e.reason})]}),e.escalationAvailable&&(0,t.jsxs)("div",{style:{display:"flex",gap:"0.75rem"},children:[(0,t.jsx)("button",{className:"btn-primary",style:{flex:1},onClick:r,children:"Connect to Professional"}),(0,t.jsx)("button",{className:"btn-ghost",onClick:o,children:"General Info"})]}),i&&(0,t.jsx)("button",{className:"btn-ghost",style:{alignSelf:"center",fontSize:"0.75rem"},onClick:i,children:"Dismiss"}),(0,t.jsx)("div",{style:{padding:"0.625rem",background:"color-mix(in srgb, var(--color-success) 6%, transparent)",border:"1px solid color-mix(in srgb, var(--color-success) 18%, transparent)",borderRadius:"8px",fontSize:"0.75rem",color:"var(--color-kairo-subtle)",textAlign:"center",lineHeight:1.5},children:"KAIRO is designed to know when to stop acting autonomously. Your safety always comes first."})]})}function n({onConnect:e}){return(0,t.jsxs)("div",{style:{padding:"1rem",background:"var(--color-kairo-surface)",border:"1px solid var(--color-kairo-border)",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem",animation:"fade-up 0.3s ease forwards"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:"0.6875rem",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--color-kairo-subtle)",marginBottom:"0.25rem"},children:"Human Assistance Available"}),(0,t.jsx)("div",{style:{fontSize:"0.8125rem",color:"var(--color-kairo-muted)"},children:"Estimated response \xb7 ~2 minutes"})]}),(0,t.jsx)("button",{className:"btn-secondary",style:{fontSize:"0.8125rem",flexShrink:0},onClick:e,children:"Connect to Staff"})]})}},1064:(e,r,o)=>{o.d(r,{D:()=>i});var t=o(687);function i({steps:e,tools:r}){let o=e.length>0||r.length>0;return(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.25rem"},children:[!o&&(0,t.jsx)("div",{style:{fontSize:"0.8125rem",color:"var(--color-kairo-muted)",padding:"0.5rem 0"},children:"Agent activity will appear here."}),e.map(e=>(0,t.jsx)(n,{step:e},e.id)),r.length>0&&(0,t.jsx)("div",{style:{marginTop:e.length>0?"0.75rem":0,display:"flex",flexDirection:"column",gap:"0.5rem"},children:r.map(e=>(0,t.jsx)(l,{tool:e},e.id))})]})}function n({step:e}){let r="complete"===e.status?"✓":"active"===e.status?"→":"error"===e.status?"✗":"○",o="complete"===e.status?"var(--color-success)":"active"===e.status?"var(--color-kairo-offwhite)":"error"===e.status?"var(--color-error)":"var(--color-kairo-muted)";return(0,t.jsxs)("div",{className:"activity-step",style:{color:o,animation:"tool-enter 0.3s ease forwards"},children:[(0,t.jsx)("span",{style:{fontFamily:"monospace",fontSize:"0.7rem",minWidth:"1rem",fontWeight:"active"===e.status?700:400},children:r}),(0,t.jsx)("span",{children:e.label}),"active"===e.status&&(0,t.jsx)("span",{style:{display:"inline-block",width:"4px",height:"4px",borderRadius:"50%",background:"var(--color-kairo-offwhite)",animation:"fade-in 0.5s ease infinite alternate",marginLeft:"0.25rem"}})]})}function l({tool:e}){let r="success"===e.status?"var(--color-success)":"error"===e.status?"var(--color-error)":"running"===e.status?"var(--color-warning)":"var(--color-kairo-muted)",o="success"===e.status?"Complete":"error"===e.status?"Failed":"Running...",i=e.output?Object.entries(e.output).slice(0,2):[];return(0,t.jsxs)("div",{style:{padding:"0.625rem 0.875rem",background:"var(--color-kairo-surface)",border:"1px solid var(--color-kairo-border)",borderLeft:`2px solid ${r}`,borderRadius:"6px",animation:"tool-enter 0.3s ease forwards"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.5rem"},children:[(0,t.jsx)("span",{style:{fontSize:"0.6875rem",fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--color-kairo-offwhite)",fontFamily:"monospace"},children:e.name}),(0,t.jsx)("span",{style:{fontSize:"0.625rem",fontWeight:600,color:r,letterSpacing:"0.04em"},children:o})]}),(0,t.jsx)("div",{style:{fontSize:"0.75rem",color:"var(--color-kairo-subtle)",marginTop:"0.25rem"},children:e.description}),i.length>0&&(0,t.jsx)("div",{style:{marginTop:"0.375rem",display:"flex",gap:"0.75rem",flexWrap:"wrap"},children:i.map(([e,o])=>(0,t.jsxs)("span",{style:{fontSize:"0.6875rem",color:r,fontFamily:"monospace"},children:[e,": ",String(o)]},e))})]})}},2083:(e,r,o)=>{o.d(r,{q:()=>m});var t=o(687),i=o(3210),n=o(4184),l=o(6813),a=o(7827),s=o(7891),c=o(9040),d=o(4780);let u=({className:e,hue:r=0,enableVoiceControl:o=!0,voiceSensitivity:u=1.5,maxRotationSpeed:f=1.2,maxHoverIntensity:m=.8,onVoiceDetected:v,externalStream:h=null})=>{let p=(0,i.useRef)(null),x=(0,i.useRef)(null),g=(0,i.useRef)(null),y=(0,i.useRef)(null),b=(0,i.useRef)(null),j=(0,i.useRef)(void 0),k=(0,i.useRef)(null),w=(0,i.useRef)(!1),S=`
    precision highp float;
    attribute vec2 position;
    attribute vec2 uv;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `,z=`
    precision highp float;

    uniform float iTime;
    uniform vec3 iResolution;
    uniform float hue;
    uniform float hover;
    uniform float rot;
    uniform float hoverIntensity;
    varying vec2 vUv;

    vec3 rgb2yiq(vec3 c) {
      float y = dot(c, vec3(0.299, 0.587, 0.114));
      float i = dot(c, vec3(0.596, -0.274, -0.322));
      float q = dot(c, vec3(0.211, -0.523, 0.312));
      return vec3(y, i, q);
    }

    vec3 yiq2rgb(vec3 c) {
      float r = c.x + 0.956 * c.y + 0.621 * c.z;
      float g = c.x - 0.272 * c.y - 0.647 * c.z;
      float b = c.x - 1.106 * c.y + 1.703 * c.z;
      return vec3(r, g, b);
    }

    vec3 adjustHue(vec3 color, float hueDeg) {
      float hueRad = hueDeg * 3.14159265 / 180.0;
      vec3 yiq = rgb2yiq(color);
      float cosA = cos(hueRad);
      float sinA = sin(hueRad);
      float i = yiq.y * cosA - yiq.z * sinA;
      float q = yiq.y * sinA + yiq.z * cosA;
      yiq.y = i;
      yiq.z = q;
      return yiq2rgb(yiq);
    }

    vec3 hash33(vec3 p3) {
      p3 = fract(p3 * vec3(0.1031, 0.11369, 0.13787));
      p3 += dot(p3, p3.yxz + 19.19);
      return -1.0 + 2.0 * fract(vec3(
        p3.x + p3.y,
        p3.x + p3.z,
        p3.y + p3.z
      ) * p3.zyx);
    }

    float snoise3(vec3 p) {
      const float K1 = 0.333333333;
      const float K2 = 0.166666667;
      vec3 i = floor(p + (p.x + p.y + p.z) * K1);
      vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
      vec3 e = step(vec3(0.0), d0 - d0.yzx);
      vec3 i1 = e * (1.0 - e.zxy);
      vec3 i2 = 1.0 - e.zxy * (1.0 - e);
      vec3 d1 = d0 - (i1 - K2);
      vec3 d2 = d0 - (i2 - K1);
      vec3 d3 = d0 - 0.5;
      vec4 h = max(0.6 - vec4(
        dot(d0, d0),
        dot(d1, d1),
        dot(d2, d2),
        dot(d3, d3)
      ), 0.0);
      vec4 n = h * h * h * h * vec4(
        dot(d0, hash33(i)),
        dot(d1, hash33(i + i1)),
        dot(d2, hash33(i + i2)),
        dot(d3, hash33(i + 1.0))
      );
      return dot(vec4(31.316), n);
    }

    vec4 extractAlpha(vec3 colorIn) {
      float a = max(max(colorIn.r, colorIn.g), colorIn.b);
      return vec4(colorIn.rgb / (a + 1e-5), a);
    }

    const vec3 baseColor1 = vec3(0.611765, 0.262745, 0.996078);
    const vec3 baseColor2 = vec3(0.298039, 0.760784, 0.913725);
    const vec3 baseColor3 = vec3(0.062745, 0.078431, 0.600000);
    const float innerRadius = 0.6;
    const float noiseScale = 0.65;

    float light1(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * attenuation);
    }

    float light2(float intensity, float attenuation, float dist) {
      return intensity / (1.0 + dist * dist * attenuation);
    }

    vec4 draw(vec2 uv) {
      vec3 color1 = adjustHue(baseColor1, hue);
      vec3 color2 = adjustHue(baseColor2, hue);
      vec3 color3 = adjustHue(baseColor3, hue);

      float ang = atan(uv.y, uv.x);
      float len = length(uv);
      float invLen = len > 0.0 ? 1.0 / len : 0.0;

      float n0 = snoise3(vec3(uv * noiseScale, iTime * 0.5)) * 0.5 + 0.5;
      float r0 = mix(mix(innerRadius, 1.0, 0.4), mix(innerRadius, 1.0, 0.6), n0);
      float d0 = distance(uv, (r0 * invLen) * uv);
      float v0 = light1(1.0, 10.0, d0);
      v0 *= smoothstep(r0 * 1.05, r0, len);
      float cl = cos(ang + iTime * 2.0) * 0.5 + 0.5;

      float a = iTime * -1.0;
      vec2 pos = vec2(cos(a), sin(a)) * r0;
      float d = distance(uv, pos);
      float v1 = light2(1.5, 5.0, d);
      v1 *= light1(1.0, 50.0, d0);

      float v2 = smoothstep(1.0, mix(innerRadius, 1.0, n0 * 0.5), len);
      float v3 = smoothstep(innerRadius, mix(innerRadius, 1.0, 0.5), len);

      vec3 col = mix(color1, color2, cl);
      col = mix(color3, col, v0);
      col = (col + v1) * v2 * v3;
      col = clamp(col, 0.0, 1.0);

      return extractAlpha(col);
    }

    vec4 mainImage(vec2 fragCoord) {
      vec2 center = iResolution.xy * 0.5;
      float size = min(iResolution.x, iResolution.y);
      vec2 uv = (fragCoord - center) / size * 2.0;

      float angle = rot;
      float s = sin(angle);
      float c = cos(angle);
      uv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);

      uv.x += hover * hoverIntensity * 0.1 * sin(uv.y * 10.0 + iTime);
      uv.y += hover * hoverIntensity * 0.1 * sin(uv.x * 10.0 + iTime);

      return draw(uv);
    }

    void main() {
      vec2 fragCoord = vUv * iResolution.xy;
      vec4 col = mainImage(fragCoord);
      gl_FragColor = vec4(col.rgb * col.a, col.a);
    }
  `,C=()=>{if(!g.current||!b.current)return 0;g.current.getByteFrequencyData(b.current);let e=0;for(let r=0;r<b.current.length;r++){let o=b.current[r]/255;e+=o*o}return Math.min(Math.sqrt(e/b.current.length)*u*3,1)},R=(0,i.useCallback)(()=>{try{j.current&&(cancelAnimationFrame(j.current),j.current=void 0),w.current&&k.current&&(k.current.getTracks().forEach(e=>{e.stop()}),k.current=null,w.current=!1),y.current&&(y.current.disconnect(),y.current=null),g.current&&(g.current.disconnect(),g.current=null),x.current&&"closed"!==x.current.state&&(x.current.close(),x.current=null),b.current=null,console.log("Microphone stopped and cleaned up")}catch(e){console.warn("Error stopping microphone:",e)}},[]),I=async()=>{try{let e;return R(),h?(e=h,w.current=!1,console.log("Using external MediaStream for visualization")):(e=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1,sampleRate:44100}}),w.current=!0,console.log("Created own MediaStream for visualization")),k.current=e,x.current=new(window.AudioContext||window.webkitAudioContext),"suspended"===x.current.state&&await x.current.resume(),g.current=x.current.createAnalyser(),y.current=x.current.createMediaStreamSource(e),g.current.fftSize=512,g.current.smoothingTimeConstant=.3,g.current.minDecibels=-90,g.current.maxDecibels=-10,y.current.connect(g.current),b.current=new Uint8Array(g.current.frequencyBinCount),console.log("Microphone initialized successfully"),!0}catch(e){return console.warn("Microphone access denied or not available:",e),!1}};return(0,i.useEffect)(()=>{let e,t=p.current;if(!t)return;let i=null,d=null,u=null;try{for((d=(i=new n.A({alpha:!0,premultipliedAlpha:!1,antialias:!0,dpr:window.devicePixelRatio||1})).gl).clearColor(0,0,0,0),d.enable(d.BLEND),d.blendFunc(d.SRC_ALPHA,d.ONE_MINUS_SRC_ALPHA);t.firstChild;)t.removeChild(t.firstChild);let h=d.canvas;t.appendChild(h);let p=new l.l(d);u=new a.B(d,{vertex:S,fragment:z,uniforms:{iTime:{value:0},iResolution:{value:new s.e(d.canvas.width,d.canvas.height,d.canvas.width/d.canvas.height)},hue:{value:r},hover:{value:0},rot:{value:0},hoverIntensity:{value:0}}});let x=new c.e(d,{geometry:p,program:u}),g=()=>{if(!t||!i||!d)return;let e=window.devicePixelRatio||1,r=t.clientWidth,o=t.clientHeight;0!==r&&0!==o&&(i.setSize(r*e,o*e),d.canvas.style.width=r+"px",d.canvas.style.height=o+"px",u&&u.uniforms.iResolution.value.set(d.canvas.width,d.canvas.height,d.canvas.width/d.canvas.height))};window.addEventListener("resize",g),g();let y=0,b=0,j=0,k=!1;o?I().then(e=>{k=e}):(R(),k=!1);let w=t=>{if(e=requestAnimationFrame(w),!u)return;let n=(t-y)*.001;if(y=t,u.uniforms.iTime.value=.001*t,u.uniforms.hue.value=r,o&&k){j=C(),v&&v(j>.1);let e=.3+j*f*2;j>.05&&(b+=n*e),u.uniforms.hover.value=Math.min(2*j,1),u.uniforms.hoverIntensity.value=Math.min(j*m*.8,m)}else u.uniforms.hover.value=0,u.uniforms.hoverIntensity.value=0,v&&v(!1);u.uniforms.rot.value=b,i&&d&&(d.clear(d.COLOR_BUFFER_BIT|d.DEPTH_BUFFER_BIT),i.render({scene:x}))};return e=requestAnimationFrame(w),()=>{if(cancelAnimationFrame(e),window.removeEventListener("resize",g),t&&d&&d.canvas)try{t.contains(d.canvas)&&t.removeChild(d.canvas)}catch(e){console.warn("Canvas cleanup error:",e)}R(),d&&d.getExtension("WEBGL_lose_context")?.loseContext()}}catch(e){return console.error("Error initializing Voice Powered Orb:",e),t&&t.firstChild&&t.removeChild(t.firstChild),()=>{window.removeEventListener("resize",()=>{})}}},[r,o,u,f,m,S,z]),(0,i.useEffect)(()=>{let e=!0;return(async()=>{if(o){if(await I(),!e)return}else R()})(),()=>{e=!1}},[o]),(0,t.jsx)("div",{ref:p,className:(0,d.cn)("w-full h-full relative",e)})},f={idle:{hue:0,label:"Ready when you are."},listening:{hue:180,label:"Listening..."},thinking:{hue:30,label:"Understanding your request..."},tool_running:{hue:45,label:"Checking live data..."},speaking:{hue:190,label:"KAIRO is responding..."},action:{hue:20,label:"Completing action..."},success:{hue:120,label:"Done."},error:{hue:-10,label:"Something went wrong."}};function m({state:e,size:r=200,audioStream:o=null}){let i=f[e];return(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1.5rem",userSelect:"none"},role:"status","aria-label":i.label,children:[(0,t.jsx)("div",{style:{position:"relative",width:r,height:r},children:(0,t.jsx)(u,{enableVoiceControl:"listening"===e,hue:i.hue,externalStream:o})}),(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("div",{style:{fontSize:"1.0625rem",fontWeight:500,color:"var(--color-kairo-offwhite)",letterSpacing:"-0.01em",transition:"color 0.3s ease"},children:i.label})})]})}},6519:(e,r,o)=>{o.d(r,{K:()=>s,L:()=>l});var t=o(687),i=o(3210),n=o(4780);function l({productName:e,productEmoji:r,unitPrice:o,quantity:l,storeName:s,onConfirm:c,onCancel:d}){let[u,f]=(0,i.useState)(l),m=o*u;return(0,t.jsxs)("div",{style:{background:"var(--color-kairo-charcoal)",border:"1px solid var(--color-kairo-border)",borderRadius:"16px",padding:"1.5rem",display:"flex",flexDirection:"column",gap:"1.25rem",animation:"fade-up 0.4s ease forwards"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:"0.625rem",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--color-kairo-muted)",marginBottom:"0.5rem"},children:"KAIRO"}),(0,t.jsx)("div",{style:{fontSize:"1.0625rem",fontWeight:500,color:"var(--color-kairo-offwhite)",lineHeight:1.4},children:"You're reserving:"})]}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1rem",padding:"0.875rem",background:"var(--color-kairo-surface)",border:"1px solid var(--color-kairo-border)",borderRadius:"10px"},children:[(0,t.jsx)("div",{style:{fontSize:"2rem"},children:r}),(0,t.jsxs)("div",{style:{flex:1},children:[(0,t.jsxs)("div",{style:{fontWeight:600,fontSize:"0.9375rem",color:"var(--color-kairo-offwhite)"},children:[u," \xd7 ",e]}),(0,t.jsxs)("div",{style:{fontSize:"0.75rem",color:"var(--color-kairo-subtle)",marginTop:"0.125rem"},children:[(0,n.$g)(o)," each"]})]}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.625rem"},children:[(0,t.jsx)("button",{onClick:()=>f(Math.max(1,u-1)),style:{width:28,height:28,borderRadius:"6px",background:"var(--color-kairo-border)",border:"none",color:"var(--color-kairo-offwhite)",cursor:"pointer",fontSize:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},"aria-label":"Decrease quantity",children:"−"}),(0,t.jsx)("span",{style:{fontSize:"1rem",fontWeight:700,color:"var(--color-kairo-offwhite)",minWidth:"1.5rem",textAlign:"center"},children:u}),(0,t.jsx)("button",{onClick:()=>f(Math.min(10,u+1)),style:{width:28,height:28,borderRadius:"6px",background:"var(--color-kairo-border)",border:"none",color:"var(--color-kairo-offwhite)",cursor:"pointer",fontSize:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},"aria-label":"Increase quantity",children:"+"})]})]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,t.jsx)(a,{label:"Total",value:(0,n.$g)(m),strong:!0}),(0,t.jsx)(a,{label:"Store",value:s})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:"0.75rem"},children:[(0,t.jsx)("button",{className:"btn-primary",style:{flex:1},onClick:()=>c(u),children:"Confirm Reservation"}),(0,t.jsx)("button",{className:"btn-ghost",onClick:d,"aria-label":"Cancel reservation",children:"Cancel"})]}),(0,t.jsx)("p",{style:{fontSize:"0.75rem",color:"var(--color-kairo-muted)",textAlign:"center",margin:0},children:"You can also say “Yes” or “Cancel” by voice."})]})}function a({label:e,value:r,strong:o}){return(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:o?"0.875rem":"0.8125rem",fontWeight:500,color:"var(--color-kairo-subtle)"},children:e}),(0,t.jsx)("span",{style:{fontSize:o?"1rem":"0.875rem",fontWeight:o?700:500,color:o?"var(--color-kairo-offwhite)":"var(--color-kairo-subtle)"},children:r})]})}function s({reservation:e,onDone:r,onUpdate:o}){let i=Math.max(0,Math.floor((e.expiresAt.getTime()-Date.now())/6e4));return(0,t.jsxs)("div",{style:{background:"var(--color-kairo-charcoal)",border:"1px solid color-mix(in srgb, var(--color-success) 25%, transparent)",borderRadius:"16px",padding:"1.5rem",display:"flex",flexDirection:"column",gap:"1.25rem",animation:"fade-up 0.5s ease forwards"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[(0,t.jsx)("div",{style:{width:36,height:36,borderRadius:"50%",background:"color-mix(in srgb, var(--color-success) 15%, transparent)",border:"1.5px solid var(--color-success)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--color-success)",fontSize:"1.1rem",fontWeight:700},children:"✓"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:"0.625rem",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--color-success)"},children:"Reservation Confirmed"}),(0,t.jsx)("div",{style:{fontWeight:700,fontSize:"1.25rem",color:"var(--color-kairo-offwhite)",letterSpacing:"0.02em",fontFamily:"monospace"},children:e.confirmationCode})]})]}),(0,t.jsxs)("div",{style:{padding:"1rem",background:"var(--color-kairo-surface)",border:"1px solid var(--color-kairo-border)",borderRadius:"10px",display:"flex",flexDirection:"column",gap:"0.625rem"},children:[(0,t.jsx)(c,{label:"Item",value:`${e.quantity} \xd7 ${e.productName}`}),(0,t.jsx)(c,{label:"Total",value:(0,n.$g)(e.totalPrice)}),(0,t.jsx)(c,{label:"Pickup",value:`Store #${e.storeId.replace("store_0","")}`}),(0,t.jsx)(c,{label:"Expires",value:`in ${i} minutes`,valueColor:"var(--color-warning)"})]}),(0,t.jsx)("div",{style:{display:"flex",gap:"0.5rem"},children:[1,2,3].filter(r=>r!==e.quantity).map(e=>(0,t.jsxs)("button",{className:"btn-ghost",style:{fontSize:"0.8125rem",padding:"0.375rem 0.875rem"},onClick:()=>o(e),children:["Change to ",e]},e))}),(0,t.jsx)("button",{className:"btn-secondary",onClick:r,children:"Done"})]})}function c({label:e,value:r,valueColor:o}){return(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:"0.8125rem",color:"var(--color-kairo-muted)"},children:e}),(0,t.jsx)("span",{style:{fontSize:"0.875rem",fontWeight:600,color:o??"var(--color-kairo-offwhite)"},children:r})]})}},6858:(e,r,o)=>{o.d(r,{y:()=>n});var t=o(687),i=o(3210);function n({state:e,barCount:r=32,height:o=48,width:n=240}){let l=(0,i.useRef)(null);return(0,i.useRef)(0),(0,i.useRef)(0),(0,t.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},"aria-hidden":"true",children:(0,t.jsx)("canvas",{ref:l,width:n,height:o,style:{display:"block"}})})}},7306:(e,r,o)=>{o.d(r,{q:()=>l});var t=o(687),i=o(4780);function n({product:e,inventory:r,onReserve:o,onSelect:n,compact:l=!1}){let a=r?.status??"available",s=r?.quantity??0,c="available"===a?"var(--color-success)":"low_stock"===a?"var(--color-warning)":"var(--color-error)",d="out_of_stock"===a?"Unavailable":"low_stock"===a?`${s} left`:`${s} available`;return(0,t.jsxs)("div",{style:{background:"var(--color-kairo-charcoal)",border:`1px solid ${e.isRecommended?"color-mix(in srgb, var(--color-signal) 35%, transparent)":"var(--color-kairo-border)"}`,borderRadius:"12px",padding:l?"0.875rem":"1.125rem",display:"flex",flexDirection:"column",gap:"0.625rem",position:"relative",cursor:n?"pointer":"default",transition:"border-color 0.15s ease, transform 0.15s ease",animation:"fade-up 0.4s ease forwards"},onClick:()=>n?.(e),role:n?"button":void 0,tabIndex:n?0:void 0,onKeyDown:r=>"Enter"===r.key&&n?.(e),children:[e.isRecommended&&(0,t.jsx)("div",{style:{position:"absolute",top:"-1px",left:"1rem",background:"var(--color-signal)",color:"white",fontSize:"0.5625rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.125rem 0.5rem",borderRadius:"0 0 4px 4px"},children:"Best Match"}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:"0.75rem",marginTop:e.isRecommended?"0.5rem":0},children:[(0,t.jsx)("div",{style:{width:48,height:48,borderRadius:"10px",background:"var(--color-kairo-surface)",border:"1px solid var(--color-kairo-border)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5rem",flexShrink:0},children:e.imageEmoji}),(0,t.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,t.jsx)("div",{style:{fontWeight:600,fontSize:"0.9375rem",color:"var(--color-kairo-offwhite)",letterSpacing:"-0.01em",lineHeight:1.2},children:e.name}),!l&&(0,t.jsx)("div",{style:{fontSize:"0.75rem",color:"var(--color-kairo-subtle)",marginTop:"0.125rem",lineHeight:1.4},children:e.description})]}),(0,t.jsx)("div",{style:{fontSize:"1.0625rem",fontWeight:700,color:"var(--color-kairo-offwhite)",letterSpacing:"-0.02em",flexShrink:0},children:(0,i.$g)(e.price)})]}),(0,t.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.25rem"},children:e.attributes.slice(0,3).map(e=>(0,t.jsx)("span",{style:{padding:"0.125rem 0.5rem",background:"var(--color-kairo-surface)",border:"1px solid var(--color-kairo-border)",borderRadius:"4px",fontSize:"0.6875rem",fontWeight:500,color:"var(--color-kairo-subtle)"},children:e},e))}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.5rem",paddingTop:"0.25rem",borderTop:"1px solid var(--color-kairo-border)"},children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.125rem"},children:[(0,t.jsxs)("span",{style:{fontSize:"0.6875rem",fontWeight:600,color:c,display:"flex",alignItems:"center",gap:"0.25rem"},children:[(0,t.jsx)("span",{style:{width:5,height:5,borderRadius:"50%",background:c,display:"inline-block"}}),d]}),(0,t.jsxs)("span",{style:{fontSize:"0.6875rem",color:"var(--color-kairo-muted)"},children:[e.section," \xb7 ",e.aisle]})]}),o&&"out_of_stock"!==a&&(0,t.jsx)("button",{className:"btn-primary",style:{padding:"0.375rem 1rem",fontSize:"0.8125rem",minHeight:36},onClick:r=>{r.stopPropagation(),o(e)},children:"Reserve"})]}),e.isRecommended&&e.matchReasons&&!l&&(0,t.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.25rem",paddingTop:"0.25rem"},children:[(0,t.jsx)("span",{style:{fontSize:"0.6875rem",color:"var(--color-signal)",fontWeight:600},children:"Why this matches:"}),e.matchReasons.map(e=>(0,t.jsxs)("span",{style:{fontSize:"0.6875rem",color:"var(--color-kairo-subtle)"},children:["\xb7 ",e]},e))]})]})}function l({products:e,inventoryMap:r={},onReserve:o,onSelect:i}){return 0===e.length?null:(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:e.map(e=>(0,t.jsx)(n,{product:e,inventory:r[e.id],onReserve:o,onSelect:i},e.id))})}},9180:(e,r,o)=>{o.d(r,{$:()=>i});var t=o(687);function i({constraints:e}){return 0===e.length?null:(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[(0,t.jsx)("div",{style:{fontSize:"0.6rem",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--color-kairo-muted)"},children:"Current Request"}),(0,t.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.375rem"},children:e.map(e=>(0,t.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:"0.25rem",padding:"0.25rem 0.625rem",background:"color-mix(in srgb, var(--color-pulse) 8%, transparent)",border:"1px solid color-mix(in srgb, var(--color-pulse) 22%, transparent)",borderRadius:"6px",fontSize:"0.75rem",fontWeight:600,color:"var(--color-pulse-light)",letterSpacing:"0.04em",animation:"fade-up 0.3s ease forwards"},children:[e.icon&&(0,t.jsx)("span",{style:{fontSize:"0.7rem"},children:e.icon}),e.value]},e.key))})]})}}};