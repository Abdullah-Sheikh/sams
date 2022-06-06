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
import Budget from './pages/Budget';
import Magazine from './pages/Magazine';
import Socities from './pages/Socities';
import Announcements from './pages/Announcements';
import Events from './pages/Events';


function App() {
  return (
    <>
  
    <Routes>

    <Route  path="/" element={<Splash/>} />
    <Route  path="/signin" element={<Signin/>} />
    <Route  path="/signup" element={<Signup/>} />
    <Route  path="/sidebar" element={<Sidebar/>} />
    <Route  path="/allotments" element={<RoomAllotments/>} />
    <Route  path="/events" element={<Events/>} />
    <Route  path="/magazine" element={<Magazine/>} />
    <Route  path="/socities" element={<Socities/>} />
    <Route  path="/budget" element={<Budget/>} />
    <Route  path="announcements/" element={<Announcements/>} />


    </Routes>

    </>
  );
}

export default App;
