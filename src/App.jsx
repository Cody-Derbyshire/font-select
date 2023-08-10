import './css/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Overlay from './components/Overlay';
import fontList from './assets/fonts/fonts.json';
import { useState } from 'react';

function App() {
  const [fonts] = useState(fontList);
  const [selectedFont, setSelectedFont] = useState('archia');
  const [selectedWeight, setSelectedWeight] = useState('regular');
  const [typedText, setTypedText] = useState('Type Something!');
  return (
    <>
      <div className='app'>
        <Overlay />
        <Header />
        <Main
          fonts={fonts}
          selectedFont={selectedFont}
          setSelectedFont={setSelectedFont}
          selectedWeight={selectedWeight}
          setSelectedWeight={setSelectedWeight}
          typedText={typedText}
          setTypedText={setTypedText}
        />
      </div>
    </>
  );
}

export default App;
