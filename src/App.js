import { useState } from 'react';
import './App.css';
import images from './assets/images';

import HomePage from './components/HomePage';


function App() {
  const [lofiIdx, setlofiIdx] = useState(7)
  const handleChangeTheme = () => {
    setlofiIdx(2)
    console.log(lofiIdx)
  }
  return (
    <div>
      <HomePage img={images.lofis[lofiIdx].img} />
    </div>
  );
}

export default App;
