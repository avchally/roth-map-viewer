import { useContext } from 'react';
import MapContext from '../components/MapContextProvider';
import { Canvas } from '@react-three/fiber';
import { MapControls } from '@react-three/drei';
import Map from '../components/Map';

export default function CanvasContainer() {
  const data = useContext(MapContext);
  const mapName = data.currentMap?.name;
  const verticesAmount = data.currentMap?.data.vertices.length

  return (
    <div id="canvas-container" style={{
      border: '1px solid black',
      width: "100%",
      height: "100%"
    }}>
      <div>Current Map: {mapName}: {verticesAmount}</div>
      <Canvas
        orthographic
        camera={{
          near: -1000,
          far: 1000,
          zoom: 5,
          position: [0, 1, 0]          
        }}
        style={{
          border: '1px solid black',
          width: "80vw",
          height: "50vh"
        }}
      >
        <Map />
        <MapControls />
      </Canvas>
    </div>
  )
}