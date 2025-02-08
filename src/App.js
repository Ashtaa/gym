
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Schedule from './components/Schedule';
import Ourteam from './components/Ourteam';
import Contactus from './components/Contactus';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path='/schedul' element={<Schedule />} />
     <Route path='/ourteam' element={<Ourteam />} />
     <Route path='/contact' element={<Contactus />} />
     </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
