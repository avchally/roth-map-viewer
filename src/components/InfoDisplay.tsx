import { useContext } from "react";
import MapContext from "./MapContextProvider";

export default function InfoDisplay() {
  const { currentMap } = useContext(MapContext);

  const vertexCount = currentMap?.data.vertices.length;
  const indexCount = currentMap?.data.indices.length;
  const mapName = currentMap?.name;

  return (
    <div id="info-display">
      <span>Loaded Map: {mapName}</span>
      <span>Vertices: {vertexCount}</span>
      <span>Indices: {indexCount}</span>
    </div>
  )
}