import TitleFrameImage from '../components/TitleFrameImage';
import MapSelector from '../components/MapSelector';
import InfoDisplay from '../components/InfoDisplay';

function UIContainer() {
  return (
    <div id="ui-container">
      <TitleFrameImage />
      <InfoDisplay />
      <MapSelector />
    </div>
  )
}

export default UIContainer;