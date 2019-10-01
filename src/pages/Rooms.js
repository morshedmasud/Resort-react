import React from 'react';
import {Link} from "react-router-dom";

import Banner from "../components/Banner";
import Hero from "../components/Hero";
import RoomContainer from "../components/RoomContainer";

const Rooms = () => {
   return (
      <>
         <Hero hero="roomsHero">
            <Banner title='our Rooms'>
               <Link to='/' className="btn-primary">
                  return home
               </Link>
            </Banner>
         </Hero>
         <RoomContainer/>
      </>
   )
};

export default Rooms;