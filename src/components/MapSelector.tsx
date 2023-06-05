import { useContext, useState } from 'react';
import MapContext from '../components/MapContextProvider';
import { MapData } from '../types';
import MapSelectorFrameImage from './MapSelectorFrameImage';
import MapSelectorCollapsedImage from './MapSelectorCollapsedImage';

export default function MapSelector() {
  const [selectionCollapsed, setSelectionCollapsed] = useState(false);
  
  const data = useContext(MapContext);
  const allMapsData = data.allMapsData;

  const onClick = () => setSelectionCollapsed(!selectionCollapsed);

  return (
    <>
      {
        selectionCollapsed
        ? <MapSelectorCollapsedImage />
        : <MapSelectorFrameImage />
      }
      <div id="map-selector">
        <div>
          {data.isLoaded ? 'Select map to load' : 'Maps are loading...'}
        </div>
        <button
          id="map-selector-collapse-button"
          onClick={onClick}
        ></button>
        <div id="map-selector-list">
          {!selectionCollapsed && allMapsData.map((mapData: MapData, idx: number) => (
            <span
              key={idx}
              className="map-selector-span"
              onClick={() => data.setCurrentMap(mapData)}
            >
              <p
                className={`map-selector-text ${
                  data.currentMap && mapData.name === data.currentMap.name
                  ? "hovered"
                  : ""
                }`}
              >
                {mapData.name}
              </p>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}