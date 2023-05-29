import { Canvas } from '@react-three/fiber';
import { MapControls } from '@react-three/drei';
import Map from '../components/Map';

export default function CanvasContainer() {
  return (
    <div id="canvas-container">
      <Canvas
        orthographic
        camera={{
          near: -1000,
          far: 1000,
          zoom: 8,
          position: [0, 1, 0]          
        }}
      >
        <Map />
        <MapControls />
      </Canvas>
    </div>
  )
}