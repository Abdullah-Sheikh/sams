import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Splash from './pages/Splash';
import Signin from './pages/signin';

function App() {
  return (
    <>
    
  
    <Routes>

    <Route  path="/splash" element={<Splash/>} />
    <Route  path="/signin" element={<Signin/>} />

    </Routes>

    </>
  );
}

export default App;
