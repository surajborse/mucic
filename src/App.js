import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Home from './Component/Home';
import MusicTab from './Component/MusicTab';
import AudioList from './Component/AudioList';
import { useState } from 'react';
import Footer from './Component/Footer';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Music } from './AllData';


function App() {

  const [list, setList] = useState(false)
  const [currentsong, setCurrentsong] = useState(Music[0])

  const backbnt = () => {
    setList(false)
  }

  return (
    <div className="App">
      <div className="music-app">
        <Header />
        <Home />
        <MusicTab setList={setList} />
        {
          list && <AudioList backbnt={backbnt} setCurrentsong={setCurrentsong} />
        }
        <button onClick={() => setList(true)} className="all-music" > All Music </button>
        <Footer currentsong={currentsong}
          setCurrentsong={setCurrentsong} />


      </div>
    </div>
  );
}

export default App;
