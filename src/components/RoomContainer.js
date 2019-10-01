import React from 'react';

import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import {withRoomConsumer} from "../context";
import Loading from "./Loading";



const RoomContainer = ({context}) => {
   const {loading, sortedRooms, rooms} = context;

   if(loading) {
         return <Loading/>
      }
   return (
      <div>
         <RoomsFilter rooms={rooms}/>
         <RoomsList rooms={sortedRooms}/>
      </div>
   )
};

export default withRoomConsumer(RoomContainer);


//   If we not use high order function insted of withRoomConsumer
// const RoomContainer = () => {
//    return (
//       <RoomConsumer>
//          {
//             (value) => {
//                const {loading, sortedRooms, rooms} = value;
//                if(loading) {
//                   return <Loading/>
//                }
//                return (
//                   <div>
//                      Room Container
//                      <RoomsFilter rooms={rooms}/>
//                      <RoomsList rooms={sortedRooms}/>
//                   </div>
//                )
//             }
//          }
//       </RoomConsumer>
//
//    )
// };
//
// export default RoomContainer