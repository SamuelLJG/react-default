import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About';
import Header from './pages/Header';

function App() {
  return (
    <HashRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
