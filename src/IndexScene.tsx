import { ScrollControls, Stage, ContactShadows, AccumulativeShadows, Backdrop, RandomizedLight, Sphere, Sky, useTexture, useGLTF, OrbitControls, Environment, Plane, PerspectiveCamera, GradientTexture, MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";
import { Model } from "./assets/ScottBoredApe";
import { useRef } from "react";

import { EffectComposer, Bloom, Noise, DepthOfField } from '@react-three/postprocessing'

export default function IndexScene(){
    
    return (
      <>
      
      {/* Lights =========================================== */}
     
       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={.5} shadow-mapSize={[512, 512]} castShadow />
       {/* <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} /> */}
       {/* <pointLight position={[-10, 0, -20]} color="white" intensity={.5} />
       <pointLight position={[0, -10, 0]} intensity={1} /> */}
       {/* <OrbitControls /> */}
       <ambientLight intensity={1} />
       {/* <PerspectiveCamera name="Camera" makeDefault={true} far={1000} near={.01} fov={70} position={[-0.69, 1.35, 3.39]}  /> */}
       {/* Backdrop Scene  ================================= */}

       <Backdrop receiveShadow castShadow floor={2} position={[0, 0, -2]} scale={[50, 10, 4]}>
        <meshStandardMaterial color="#101010" envMapIntensity={0.1} />
       </Backdrop>

      {/* Postprocessing =================================== */}
       <EffectComposer disableNormalPass> 
        {/* <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={.3} />  */}
       <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> 
         <Noise opacity={0.025} />
       </EffectComposer>

      {/* Area Light - Not in use  ========================= */}

      <rectAreaLight args={['white', 3]} width={5} height={5} position={[-3, 4, 1]}  visible={false} />
   
      {/* Models =========================================== */}
       
       {/* <Ape_NoAnimation position={[0, .01, 0]} scale={2}/>  */}
       <ScrollControls pages={4}>
       <Model scale={1}/> 
       </ScrollControls>
       
      
      
      </>
    );
}