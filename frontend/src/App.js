import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Splash from './pages/Splash';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Sidebar from './components/Sidebar';
import RoomAllotments from './pages/RoomAllotments';

function App() {
  return (
    <>
  
    <Routes>

    <Route  path="/splash" element={<Splash/>} />
    <Route  path="/signin" element={<Signin/>} />
    <Route  path="/signup" element={<Signup/>} />
    <Route  path="/sidebar" element={<Sidebar/>} />
    <Route  path="/allotments" element={<RoomAllotments/>} />

    </Routes>

    </>
  );
}

export default App;
