import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

function Model({ scale, position, rotation }) {
  const { scene } = useGLTF("/computer/scene.gltf");

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

const Computers = ({ isMobile }) => {
  const modelScale = isMobile ? 0.7 : 0.75;
  const modelPosition = isMobile ? [0, -3, -2.2] : [1.2, -3, -5];
  const modelRotation = [-0.01, -1.5, -0.1];
  return (
    <mesh>
      <ambientLight intensity={1} />
      <hemisphereLight
        intensity={1.5}
        skyColor={"white"}
        groundColor={"white"}
      />
      <spotLight
        position={[10, 20, 10]}
        angle={0.1}
        penumbra={2}
        intensity={2}
        castShadow
        shadow-mapSize={2048}
      />
      <pointLight intensity={2} position={[10, 10, 10]} />
      <Model
        scale={modelScale}
        position={modelPosition}
        rotation={modelRotation}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [3, 15, 20], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          target={[0, 0, -5]}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
