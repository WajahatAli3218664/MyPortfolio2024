"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ShaderMaterial, Texture } from "three";

interface Uniforms {
  uTime: { value: number };
  uResolution: { value: [number, number] };
  uTexture: { value: Texture | null }; // Use THREE.Texture type for better type safety
}

// Function to get the uniforms
const getUniforms = (): Uniforms => {
  return {
    uTime: { value: 0 },
    uResolution: { value: [window.innerWidth, window.innerHeight] },
    uTexture: { value: null }, // Type explicitly
  };
};

const CanvasRevealEffect: React.FC = () => {
  const uniforms = useRef<Uniforms>(getUniforms());

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      uniforms.current.uResolution.value = [window.innerWidth, window.innerHeight];
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Update time uniform on every frame
  useFrame((state) => {
    uniforms.current.uTime.value = state.clock.getElapsedTime();
  });

  // Create the ShaderMaterial using useMemo
  const material = useMemo(() => {
    return new ShaderMaterial({
      uniforms: {
        uTime: uniforms.current.uTime,
        uResolution: uniforms.current.uResolution,
        uTexture: uniforms.current.uTexture, // Explicitly pass the uniforms
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        uniform vec2 uResolution;
        varying vec2 vUv;
        void main() {
          vec2 uv = vUv;
          // Your shader code here
          gl_FragColor = vec4(uv, 0.5 + 0.5 * sin(uTime), 1.0);
        }
      `,
    });
  }, []); // No need to include uniforms as it is a ref and won't change

  return (
    <Canvas>
      <mesh>
        <planeGeometry args={[5, 5]} />
        <primitive object={material} attach="material" />
      </mesh>
    </Canvas>
  );
};

export default CanvasRevealEffect;
