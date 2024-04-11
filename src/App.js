import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About';
import Header from './pages/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="react-default/" element={<Home/>} />
        <Route path="react-default/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
