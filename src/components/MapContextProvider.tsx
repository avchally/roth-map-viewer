import { createContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { retrieveMapData, readListOfMaps } from '../utils/mapHelper';
import { MapContextData, MapData } from '../types';

interface Props {
  children?: ReactNode
}

export const MapContext = createContext({} as MapContextData);

export function MapContextProvider({ children }: Props) {
  const [allMapsData, setAllMapsData] = useState<MapData[]>([]);
  const [currentMap, setCurrentMap] = useState<MapData>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const value = useMemo(() => {
    return {
      allMapsData,
      currentMap,
      setCurrentMap,
      isLoaded
    };
  }, [
    allMapsData,
    currentMap,
    setCurrentMap,
    isLoaded
  ])

  useEffect(() => {
    readListOfMaps()
      .then(retrieveMapData)
      .then((mapDataList) => {
        setIsLoaded(true);
        setAllMapsData(mapDataList);
        setCurrentMap(mapDataList.find(mapData => mapData.name === 'STUDY1'));
      })
      .catch((error) => console.log(`Error occurred while loading: ${error}`));
  }, []);

  console.log(`Current map: ${currentMap?.name}`);

  return (
    <MapContext.Provider value={value}>
      {children}
    </MapContext.Provider>
  )
}

export default MapContext;