import { Canvas } from '@react-three/fiber'
import React from 'react'
import './style.css'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const App = () => { 
  return (
    <div className="w-full h-screen ">
      <div className="navbar flex gap-10 py-10 absolute top-0 left-1/2 -translate-x-1/2  font-['Helvetica_Now_Display']">
      {[
        "iphone","ipad", "services","ios","mac","products","iphone","ipad", "services","ios","mac","products"
      ].map((e)=>(
        <a href={`#${e}`} className='text-white capitalize text-lg font-[700] '>{e}</a>
      ))
      }
      </div>
      <div className="absolute bg-black flex flex-col items-center  text-white  top-30 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display']">
      <h3 className='text-7xl masked tracking-tighter font-[700]'>macbook pro.</h3>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment
          files={[
            'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr',
          ]}
        />

        {/* ✅ Wrap MacContainer inside ScrollControls */}
        <ScrollControls pages={3} damping={0.2}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App
