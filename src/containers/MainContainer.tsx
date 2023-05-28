import { useContext } from 'react';
import UIContainer from './UIContainer';
import CanvasContainer from './CanvasContainer';
import MapContext from '../components/MapContextProvider';
import Loading from './Loading';

export default function MainContainer() {
  const data = useContext(MapContext);

  return (
    <>
      {
        data.isLoaded
        ? <>
            <UIContainer />
            <CanvasContainer />
          </>
        : <Loading />

      }
      
    </>
  );
}