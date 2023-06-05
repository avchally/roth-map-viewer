import { useEffect } from "react";
import ModalWindowImage from "./ModalWindowImage";
import { InfoModalProps } from "../types";
import xButton from '../assets/x_button.png';

export default function InfoModal(props: InfoModalProps) {
  const { isModalDisplayed, setIsModalDisplayed } = props;
  
    const closeWindow = () => {
      setIsModalDisplayed(false);
    }

  const escToClose = (e: globalThis.KeyboardEvent) => {
    if (isModalDisplayed && e.key === "Escape") {
      closeWindow();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', escToClose);
  }, []);

  return (
    isModalDisplayed
    ? <div id="info-modal-container">
        <ModalWindowImage />
        <div id="info-modal-text">
          <img id="info-model-X" src={xButton} onClick={closeWindow} />
          <h2>ROTH Map Viewer</h2>
          <p>Welcome! Realms of the Haunting is a 1996 adventure shooter game released for MS-DOS and Windows 95.</p>
          <p>This site is a compilation of all of the available 'maps' or levels in the game. The maps are wireframes extracted from the ingame '.RAW' files. After selecting a map on the left, you can use mouse controls to rotate and zoom the map.</p>
          <p>{'Future plans include adding textures and item locations, but that requires more reverse-engineering =)'}</p>
          <p>Massive credits go out to <a href="https://github.com/OpenROTH/tools" target="_blank">w4kfu</a> for creating the original parsing scripts.</p>
          <p>
            If you have any questions, my contact information is available on the{' '}
            <a href="https://tales-from-the-tower.fandom.com/wiki/User:Challex13" target="_blank">ROTH wiki</a>.
          </p>
        </div>
        <div
          id="modal-backdrop"          
          onClick={closeWindow}
        >
        </div>
      </div>
    :<></>
  );
}