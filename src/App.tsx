
import { Canvas } from '@react-three/fiber';
import { Html,PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import './App.css'
import IndexScene  from './IndexScene';
import {getProject} from '@theatre/core';
import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension';
import {SheetProvider} from '@theatre/r3f';

// studio.initialize()
// studio.extend(extension)
// const demoSheet = getProject('Demo Project').sheet('Demo Sheet')


export default function App() {

 

  return (
    
    <Canvas shadows dpr={[1, 2]} >
    <Suspense fallback={null}>
        <IndexScene />
    </Suspense>
    
  </Canvas>

    

  )
}