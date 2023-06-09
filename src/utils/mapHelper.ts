import * as THREE from 'three';

interface MapData {
  name: string,
  data: {
    vertices: THREE.Vector3[]
    indices: number[]
  }
}

export async function retrieveMapData(mapList: string[]) {
  const mapDataList: MapData[] = [];

  for (const map of mapList) {
    const mapData = await fetch(`maps/${map}.obj`)
      .then(res => res.text())
      .then(text => text.split('\n'));

    const vertices1d = [];
    const vertices2d = [];
    const indices1d = [];
    const indices2d = [];
    for (const point of mapData) {
      if (point[0] === 'v') {
        const [_, x, y, z] = point.split(' ');
        const tempPoint = [Number(y), Number(z), Number(x)];
        vertices1d.push(...tempPoint);
        vertices2d.push(new THREE.Vector3(...tempPoint));
      } else {
        const [_, l1, l2] = point.split(' ');
        const tempPoint = [Number(l1) - 1, Number(l2) - 1]
        indices1d.push(...tempPoint);
        indices2d.push(tempPoint);
      }
    }

    mapDataList.push({
      name: map,
      data: {
        vertices: vertices2d,
        indices: indices1d
      }
    });
  }

  console.log('finished loading');
  console.log(mapDataList);
  return mapDataList;
}

export async function readListOfMaps(listOfMapsFile='maplist.txt') {
  return await fetch(listOfMapsFile)
    .then((res) => res.text())
    .then((data) => data.split('\r\n'));
}