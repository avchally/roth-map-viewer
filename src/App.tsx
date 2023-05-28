import './App.css'
import { MapContextProvider } from './components/MapContextProvider'
import MainContainer from './containers/MainContainer'

function App() {
  return (
    <MapContextProvider>
      <MainContainer />
    </MapContextProvider>
  )
}

export default App
