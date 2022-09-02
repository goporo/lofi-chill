import { useState } from 'react';
import './App.css';
import images from './assets/images';

import HomePage from './components/HomePage';


import store, { fullScreenSlice, updateFullScreen } from './app/store';

function App() {
  const [lofiIdx, setlofiIdx] = useState(0)
  const [helo, setHelo] = useState(false)
  return (
    <div>
      <HomePage img={images.lofis[lofiIdx].img} />
    </div>
  );
}

export default App;
