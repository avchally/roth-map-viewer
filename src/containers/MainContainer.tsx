import { useContext, useState } from 'react';
import UIContainer from './UIContainer';
import CanvasContainer from './CanvasContainer';
import MapContext from '../components/MapContextProvider';
import InfoModal from '../components/InfoModal';

export default function MainContainer() {
  const [isModalDisplayed, setIsModalDisplayed] = useState<boolean>(true);
  
  const data = useContext(MapContext);

  return (
    <div className="main-container">
        <InfoModal
          isModalDisplayed={isModalDisplayed}
          setIsModalDisplayed={setIsModalDisplayed}
        />
        {
          data.isLoaded
          ? <CanvasContainer />
          : <></>
        }
        <UIContainer
          isModalDisplayed={isModalDisplayed}
          setIsModalDisplayed={setIsModalDisplayed}
        />
    </div>
  );
}