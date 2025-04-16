import React from 'react';

/* THREE */
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';

interface ParticlesProps {
  count?: number;
}

export default function Particles({ count = 200 }: ParticlesProps) {
  const meshRef = React.useRef<THREE.Points>(null);
  const { size } = useThree();

  const particles = React.useMemo(() => {
    const temp: { position: [number, number, number]; speed: number }[] = [];

    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          Math.random() * 10 + 5,
          (Math.random() - 0.5) * 10,
        ],
        speed: 0.005 + Math.random() * 0.001,
      });
    }

    return temp;
  }, [count]);

  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      pos[i * 3] = p.position[0];
      pos[i * 3 + 1] = p.position[1];
      pos[i * 3 + 2] = p.position[2];
    });
    return pos;
  }, [count, particles]);

  useFrame(() => {
    if (!meshRef.current) return;

    const positions = meshRef.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      let y = positions[i * 3 + 1];
      y -= particles[i].speed;
      if (y < -2) y = Math.random() * 10 + 5;
      positions[i * 3 + 1] = y;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        {/* @ts-expect-error - This error occurs because @react-three/fiber expects a type that matches THREE.BufferAttribute. The args prop is not needed if we provide array, count, and itemSize directly */}
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05 * (size.width / 1920)}
        opacity={0.9}
        color="#ffffff"
        depthWrite={false}
        transparent
      />
    </points>
  );
}
