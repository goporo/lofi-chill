import './App.css';
import images from './assets/images';

import HomePage from './components/HomePage';

function App() {

  return (
    <HomePage img={images.lofi4} />
  );
}

export default App;
