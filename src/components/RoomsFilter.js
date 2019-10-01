import React from 'react';
import { useContext } from 'react';
import { RoomContext } from "../context";
import Title from "./Title";

const RoomsFilter = () => {
   const context = useContext(RoomContext);
   console.log(context)
   const {
      handleChange,
      type, capacity,
      price, manPrice,
      minSize, maxSize,
      breakfast, pets
   } = context;

   return (
      <section className='filter-container'>
         <Title title="search rooms" />
         <form className='filter-form'>
         {/* select type  */}
            <div className="form-group">
               <label htmlFor="type">room type</label>
               <select name="type" id="type" value={type}
               className='form-control' onChange={handleChange}>
                  <option value=""></option>
               </select>
            </div>
         {/* end select type*/}
         </form>
      </section>
   )
};

export default RoomsFilter


