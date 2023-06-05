import TitleFrameImage from '../components/TitleFrameImage';
import MapSelector from '../components/MapSelector';
import InfoDisplay from '../components/InfoDisplay';
import InfoButton from '../components/InfoButton';
import { InfoModalProps } from '../types';

function UIContainer(props: InfoModalProps) {  
  
  return (
    <div id="ui-container">
      <div id="title-container">
        <TitleFrameImage />
        <InfoDisplay />
        <InfoButton setIsModalDisplayed={props.setIsModalDisplayed}/>
      </div>
      <MapSelector />
    </div>
  )
}

export default UIContainer;