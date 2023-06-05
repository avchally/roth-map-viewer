export interface MapData {
  name: string,
  data: {
    vertices: THREE.Vector3[]
    indices: number[]
  }
}

export interface MapContextData {
  allMapsData: MapData[],
  currentMap: MapData | undefined,
  setCurrentMap: (mapData: React.SetStateAction<MapData | undefined>) => void,
  isLoaded: boolean
}

export interface InfoModalProps {
  isModalDisplayed: boolean;
  setIsModalDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
}