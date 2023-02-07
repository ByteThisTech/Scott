/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    goblin: THREE.SkinnedMesh
    Wolf3D_Body_Custom: THREE.SkinnedMesh
    Wolf3D_EyeLeft: THREE.SkinnedMesh
    Wolf3D_EyeRight: THREE.SkinnedMesh
    Wolf3D_Head_Custom: THREE.SkinnedMesh
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh
    Wolf3D_Outfit_Top: THREE.SkinnedMesh
    Wolf3D_Teeth: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
    mixamorigHips_1: THREE.Bone
  }
  materials: {
    texture: THREE.MeshStandardMaterial
    ['Wolf3D_Body.003']: THREE.MeshStandardMaterial
    ['Wolf3D_EyeLeft.002']: THREE.MeshStandardMaterial
    ['Wolf3D_EyeRight.002']: THREE.MeshStandardMaterial
    ['Wolf3D_Head_Custom.002']: THREE.MeshStandardMaterial
    ['Wolf3D_Outfit_Bottom.003']: THREE.MeshStandardMaterial
    ['Wolf3D_Outfit_Footwear.003']: THREE.MeshStandardMaterial
    ['Wolf3D_Outfit_Top.003']: THREE.MeshStandardMaterial
    ['Wolf3D_Teeth.002']: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Goblin_Walk' | 'Yoot_Walk'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glbFiles/YootAndGoblin2.glb') as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)

      // {/* After DOM updates this is called ==================================== */}
      useEffect(() =>
      {
        actions['Goblin_Walk']?.play()
        actions['Yoot_Walk']?.play()

      }, [] )


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature001" position={[-0.9, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.02}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="goblin" geometry={nodes.goblin.geometry} material={materials.texture} skeleton={nodes.goblin.skeleton} />
        </group>
        <group name="Armature">
          <primitive object={nodes.mixamorigHips_1} />
          <skinnedMesh name="Wolf3D_Body_Custom" geometry={nodes.Wolf3D_Body_Custom.geometry} material={materials['Wolf3D_Body.003']} skeleton={nodes.Wolf3D_Body_Custom.skeleton} />
          <skinnedMesh name="Wolf3D_EyeLeft" geometry={nodes.Wolf3D_EyeLeft.geometry} material={materials['Wolf3D_EyeLeft.002']} skeleton={nodes.Wolf3D_EyeLeft.skeleton} />
          <skinnedMesh name="Wolf3D_EyeRight" geometry={nodes.Wolf3D_EyeRight.geometry} material={materials['Wolf3D_EyeRight.002']} skeleton={nodes.Wolf3D_EyeRight.skeleton} />
          <skinnedMesh name="Wolf3D_Head_Custom" geometry={nodes.Wolf3D_Head_Custom.geometry} material={materials['Wolf3D_Head_Custom.002']} skeleton={nodes.Wolf3D_Head_Custom.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials['Wolf3D_Outfit_Bottom.003']} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials['Wolf3D_Outfit_Footwear.003']} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials['Wolf3D_Outfit_Top.003']} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
          <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials['Wolf3D_Teeth.002']} skeleton={nodes.Wolf3D_Teeth.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glbFiles/YootAndGoblin2.glb')
