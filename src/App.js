import React from "react";
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import Errors from './Pages/Errors'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
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
<Switch>
  <Route exact path='/' component={Home}/>
  <Route exact path='/rooms' component={Rooms}/>
  <Route path='/rooms/:slug' component={Room}/>
  <Route  component={Errors}/>
</Switch>
</>
</GlobalProvider>
</Router>
  );
};

export default App;
