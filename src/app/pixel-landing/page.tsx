"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function PixelLanding() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 📸 texture
    const texture = new THREE.TextureLoader().load(
      "https://plus.unsplash.com/premium_photo-1765830764975-64cd3a5441cb?q=80&w=1470&auto=format&fit=crop"
    );
    texture.minFilter = THREE.LinearFilter;

    // 🎯 uniforms
    const uniforms = {
      uTexture: { value: texture },
      uProgress: { value: 0 },
      uTime: { value: 0 },
    };

    // 🧠 shader
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform float uProgress;
        uniform float uTime;

        varying vec2 vUv;

        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);

          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));

          vec2 u = f * f * (3.0 - 2.0 * f);

          return mix(a, b, u.x) +
                 (c - a) * u.y * (1.0 - u.x) +
                 (d - b) * u.x * u.y;
        }

        void main() {
          vec2 uv = vUv;

          vec4 color = texture2D(uTexture, uv);

          // 🔲 grid blocks
          float grid = 60.0;
          vec2 gridUV = floor(uv * grid) / grid;

          // 🌊 structured noise (clusters)
          float n = noise(gridUV * 10.0 + uTime * 0.4);

          // 🔥 directional wipe (bottom → top)
          float wave = smoothstep(0.0, 1.0, uv.y + uProgress * 1.3);

          // 🎯 mask
          float mask = step(1.0 - uProgress * wave, n);

          // ⬛ apply black blocks
          color.rgb = mix(color.rgb, vec3(0.0), mask);

          // subtle dark fade
          color.rgb *= (1.0 - uProgress * 0.3);

          gl_FragColor = color;
        }
      `,
    });

    // 🟦 fullscreen quad
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 📜 scroll logic
    const handleScroll = () => {
      const section = canvas.parentElement!;
      const rect = section.getBoundingClientRect();

      let progress = 1 - rect.top / window.innerHeight;
      progress = Math.min(Math.max(progress, 0), 1);

      uniforms.uProgress.value = progress;
    };

    window.addEventListener("scroll", handleScroll);

    // 🎬 animation
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      uniforms.uTime.value = clock.getElapsedTime();

      renderer.render(scene, camera);
    };

    animate();

    // 📱 resize fix
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // 🧹 cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section>
      {/* 🔝 intro */}
      <div className="h-screen w-full bg-neutral-900 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-neutral-200 text-center">
          Artefakt Style <br /> Pixel Shader
        </h1>
      </div>

      {/* 🎯 shader section */}
      <div className="h-screen w-full relative overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* 🔚 outro */}
      <div className="h-screen w-full bg-neutral-900 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-neutral-200 text-center">
          The <br /> End
        </h1>
      </div>
    </section>
  );
}