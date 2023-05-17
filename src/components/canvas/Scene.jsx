'use client'

import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { r3f } from '@/helpers/global'

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <>
      <VRButton />
      <Canvas {...props}>
        <XR>
          <Controllers />
          <Hands />
          {/* @ts-ignore */}
          <r3f.Out />
          <Preload all />
        </XR>
      </Canvas>
    </>
  )
}
