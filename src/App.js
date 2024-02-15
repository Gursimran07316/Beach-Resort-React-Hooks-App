import React from "react";
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import Errors from './Pages/Errors'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import "./App.css";
import Room from "./Pages/Room";
import {GlobalProvider} from './context/GlobalState'

const App = () => {
  return (
  
  <Router>
<GlobalProvider>
    <>
    <Navbar/>
    <Routes>
  <Route path='/' element={<Home />} />
  <Route  path='/rooms' element={<Rooms />} />
  <Route path='/rooms/:slug' element={<Room />} />
  <Route path='*' element={<Errors />} />
</Routes>
</>
</GlobalProvider>
</Router>
  );
};

export default App;
