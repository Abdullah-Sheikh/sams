import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Splash from './pages/Splash';
import Signin from './pages/signin';
import Signup from './pages/signup';

function App() {
  return (
    <>
    
  
    <Routes>

    <Route  path="/splash" element={<Splash/>} />
    <Route  path="/signin" element={<Signin/>} />
    <Route  path="/signup" element={<Signup/>} />

    </Routes>

    </>
  );
}

export default App;
