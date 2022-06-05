import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Splash from './pages/Splash';

function App() {
  return (
    <>
    
  
    <Routes>

    <Route  path="/splash" element={<Splash/>} />

    </Routes>

    </>
  );
}

export default App;
