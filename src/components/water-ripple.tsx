"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { X } from "lucide-react";

export default function WaterRipple() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Uniforms
    const uniforms = {
      uTime: { value: 0 },
      uResolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
      uRippleCenter: { value: new THREE.Vector2(0.5, 0.5) },
      uRippleTime: { value: 0 },
    };

    // Shader Material
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
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uRippleCenter;
        uniform float uRippleTime;

        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;

          float dist = distance(uv, uRippleCenter);

          float ripple = sin(20.0 * dist - uRippleTime * 4.0);
          ripple *= exp(-3.0 * dist);

          vec2 displacedUv = uv + normalize(uv - uRippleCenter) * ripple * 0.03;

          // Fake water shading
          float shade = ripple * 0.5;

          vec3 color = vec3(0.1, 0.2, 0.3) + shade;

          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Click handler
    const handleClick = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = 1 - e.clientY / window.innerHeight;

      uniforms.uRippleCenter.value.set(x, y);
      uniforms.uRippleTime.value = 0;

      gsap.to(uniforms.uRippleTime, {
        value: 5,
        duration: 2,
        ease: "power2.out",
      });
    };

    window.addEventListener("click", handleClick);

    // Animate
    const clock = new THREE.Clock();

    const animate = () => {
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    for (let i = 0; i < 20; i++) {
      animate();
    }
    // Resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
      }}
      className="w-3xl h-3xl"
    />
  );
}
