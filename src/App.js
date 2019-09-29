import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";
import Navbar from "./components/Navbar";
import Router from "./Route";

const App = () => {
   return (
      <>
         <Router/>


      </>
   )
};

export default App;