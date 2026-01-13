import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navvbar from './components/Navvbar';
import { HashRouter as Router, Routes, Route } from 'react-router';

function App() {
  return (
    <>
      <Router>
          <Navvbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
