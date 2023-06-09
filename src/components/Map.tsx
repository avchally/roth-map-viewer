import { useContext, useEffect, useRef } from 'react';
import MapContext from '../components/MapContextProvider';
import * as THREE from 'three';
import { MapContextData } from '../types';

export default function Map() {
  const data = useContext<MapContextData>(MapContext);
  const ref = useRef<THREE.BufferGeometry<THREE.NormalBufferAttributes>>(null);
  
  const mapData = data?.currentMap?.data;

  useEffect(() => {
    const geometry = ref.current;
    
    if (geometry && mapData) {
      geometry.setIndex(mapData.indices);
      geometry.setFromPoints(mapData.vertices);
      geometry.attributes.position.needsUpdate = true;
    }

  }, [mapData])

  // const MAX_POINTS = 20000;

  // const points = new THREE.BufferAttribute(new Float32Array(MAX_POINTS * 3), 3);
  // const indices = new THREE.BufferAttribute(new Uint32Array(MAX_POINTS * 2), 1);

  return (
    <lineSegments>
      <bufferGeometry
        ref={ref}
        attach="geometry"
      >
        {/* <bufferAttribute
          attach="attributes-position"
          {...points}
        /> */}
        {/* <bufferAttribute
          attach="index"
          {...indices}
        /> */}
      </bufferGeometry>
      <lineBasicMaterial
        attach="material"
        color={0xffffff}
      />
    </lineSegments>
  )
}