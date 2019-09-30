import React from 'react';
import {Link} from "react-router-dom";
import {RoomContext} from "../context";

import Room from "../components/Room";
import defaultBcg from '../images/room-1.jpeg';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import StyledHero from "../components/StyleHero";


class SingleRoom extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         slug: this.props.match.params.slug,
         defaultBcg
      }
   }
   static contextType = RoomContext;

   render() {
      const getRoom = this.context.getRoom;
      const room = getRoom(this.state.slug);
      if (!room){
         return (
            <div className='error'>
               <h3>so such room could be found...</h3>
               <Link to="/rooms" className="btn-primary" >back to rooms</Link>
            </div>
         )
      }

      const {name, description, capacity, size,price,
         extras,breakfast, pets, images} = room;

      return (
         <StyledHero  img={images[0] || defaultBcg}>
            <Banner title={`${name} room`}>
               <Link to='/rooms' className='btn-primary'>
                  back to rooms
               </Link>
            </Banner>
         </StyledHero>
      )
   }
}

export default SingleRoom;