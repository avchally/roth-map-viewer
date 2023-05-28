import { useContext } from 'react';
import MapContext from '../components/MapContextProvider';
import { MapData } from '../types';

function UIContainer() {
  const data = useContext(MapContext);
  const allMapsData = data.allMapsData;

  return (
    <>
      {allMapsData.map((mapData: MapData, idx: number) => (
        <span
          key={idx}
          className="map-selector-span"
          onClick={() => data.setCurrentMap(mapData)}
          style={{
            display: "inline-block",
            margin: "10px",
            cursor: "pointer"
          }}
        >
          {mapData.name}
        </span>
      ))}
    </>
  )
}

export default UIContainer;