import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Schedule from './components/Schedule';
import Ourteam from './components/Ourteam';
import Contactus from './components/Contactus';
import WorkoutVideoPage from './components/WorkoutVideoPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedul" element={<Schedule />} />
          <Route path="/ourteam" element={<Ourteam />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/tutorial" element={<WorkoutVideoPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
