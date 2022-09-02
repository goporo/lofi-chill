import { useState } from 'react';
import './App.css';
import images from './assets/images';

import HomePage from './components/HomePage';

function App() {
  const [lofiIdx, setlofiIdx] = useState(0)
  return (
    <div>
      {/* <button onClick={() => { alert(lofiIdx) }}>helo</button> */}
      <HomePage img={images.lofis[lofiIdx].img} />
    </div>
  );
}

export default App;
