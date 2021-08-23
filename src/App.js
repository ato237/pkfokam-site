import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Subnavbar from './components/Subnavbar';
import Logo from './components/Logo';
import Yosai from './components/Yosai';
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <>
     <Router>
       <Subnavbar/>
       <Logo/>
        <Navbar />
        <ImageSlider/>
       <Yosai/>
     </Router>
    </>
  );
}

export default App;
