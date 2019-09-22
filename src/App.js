import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';


import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";


const App = () => {
   return (
      <>
         <Route path="/"  component={Home}/>
         <Route path="/rooms" component={Rooms}/>
         <Route path="/single-room" component={SingleRoom}/>
         <Route path="/error" component={Error}/>

      </>
   )
};

export default App;