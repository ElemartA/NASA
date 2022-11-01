import { useFrame, useLoader, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';
import EarthNormalMap from '../../assets/textures/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg';
import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg';
import EarthCloudsMap from '../../assets/textures/8k_earth_clouds.jpg';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import Media from 'react-media';

export const Earth = () => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
    EarthDayMap,
    EarthNormalMap,
    EarthSpecularMap,
    EarthCloudsMap,
  ]);

  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (earthRef && earthRef.current) {
      earthRef.current!.rotation.y = elapsedTime / 6;
    }
    if (cloudsRef && cloudsRef.current) {
      cloudsRef.current!.rotation.y = elapsedTime / 6;
    }
  });

  return (
    <>
      <Media
        queries={{
          small: { maxWidth: 740 },
        }}
      >
        {(mathes) => (
          <>
            {mathes.small ? (
              <>
                <mesh ref={cloudsRef} position={[0.1, 0, 0]}>
                  <sphereBufferGeometry args={[1.1505, 32, 132]} />
                  <meshPhongMaterial
                    map={cloudsMap}
                    opacity={0.1}
                    depthWrite={true}
                    transparent={true}
                    side={THREE.DoubleSide}
                  />
                </mesh>
                <mesh ref={earthRef} position={[0.1, 0, 0]}>
                  <sphereBufferGeometry args={[1.15, 32, 32]} />
                  <meshPhongMaterial specularMap={specularMap} />
                  <meshStandardMaterial map={colorMap} normalMap={normalMap} />
                  <OrbitControls
                    enableZoom={true}
                    enablePan={true}
                    enableRotate={true}
                    zoomSpeed={0.6}
                    panSpeed={0.5}
                    rotateSpeed={0.4}
                  />
                </mesh>
              </>
            ) : (
              <>
                <mesh ref={cloudsRef} position={[0, 0, 0]}>
                  <sphereBufferGeometry args={[2.5005, 40, 40]} />
                  <meshPhongMaterial
                    map={cloudsMap}
                    opacity={0.1}
                    depthWrite={true}
                    transparent={true}
                    side={THREE.DoubleSide}
                  />
                </mesh>
                <mesh ref={earthRef} position={[0, 0, 0]}>
                  <sphereBufferGeometry args={[2.5, 40, 40]} />
                  <meshPhongMaterial specularMap={specularMap} />
                  <meshStandardMaterial
                    map={colorMap}
                    normalMap={normalMap}
                    metalness={0.4}
                    roughness={0.7}
                  />
                  <OrbitControls
                    enableZoom={true}
                    enablePan={true}
                    enableRotate={true}
                    zoomSpeed={0.6}
                    panSpeed={0.5}
                    rotateSpeed={0.4}
                  />
                </mesh>
              </>
            )}
          </>
        )}
      </Media>
      <pointLight color='#f6fea' position={[2, 0, 5]} intensity={1.2} />
      <ambientLight intensity={1} />
      <Stars radius={300} depth={60} count={19000} factor={8} saturation={0} fade={true} />
    </>
  );
};

export default Earth;
