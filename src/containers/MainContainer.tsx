import { useContext } from 'react';
import UIContainer from './UIContainer';
import CanvasContainer from './CanvasContainer';
import MapContext from '../components/MapContextProvider';
import Loading from './Loading';

export default function MainContainer() {
  const data = useContext(MapContext);

  return (
    <div className="main-container">
      {
        data.isLoaded
        ? <>
            <CanvasContainer />
            <UIContainer />
          </>
        : <Loading />

      }
      
    </div>
  );
}