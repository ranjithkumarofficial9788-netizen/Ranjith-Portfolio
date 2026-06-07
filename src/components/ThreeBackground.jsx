import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function StarParticles() {
  const pointsRef = useRef();
  const count = 1000;

  // Generate random positions in space
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 3; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 3; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 3; // z
    }
    return pos;
  }, [count]);

  // Handle slow rotations and interactive parallax shift
  useFrame((state) => {
    const { pointer } = state;
    if (pointsRef.current) {
      // Gentle self rotation
      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.rotation.x += 0.0002;

      // Mouse movements shift the axis rotation gently
      const targetRotationX = pointer.y * 0.15;
      const targetRotationY = pointer.x * 0.15;

      pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, targetRotationX, 0.05);
      pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, targetRotationY, 0.05);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.006}
        color="#00E5FF"
        transparent
        opacity={0.7}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-20 w-full h-full bg-[#050816] pointer-events-none">
      {/* Dynamic glow overlays */}
      <div className="absolute top-[15%] left-[10%] w-[350px] h-[350px] bg-chakraBlue/5 rounded-full filter blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-narutoOrange/5 rounded-full filter blur-[150px] pointer-events-none animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute top-[50%] right-[20%] w-[250px] h-[250px] bg-shinobiGreen/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-leaf-grid opacity-80 pointer-events-none"></div>
      
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 0.8], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      >
        <StarParticles />
      </Canvas>
    </div>
  );
}
