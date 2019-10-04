import React from 'react';
import { useContext } from 'react';
import { RoomContext } from "../context";
import Title from "./Title";


// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
};

const RoomsFilter = ({rooms}) => {
   const context = useContext(RoomContext);

   const {
      handleChange,
      type, capacity,
      price, manPrice,
      minSize, maxSize,
      breakfast, pets
   } = context;
   // get Unique types
   let types = getUnique(rooms, 'type');

   // add all
   types = ['all', ...types];

   // map to jsx
   types = types.map((item, index) => {
      return <option key={index} value={item}>{item}</option>
   });

   return (
      <section className='filter-container'>
         <Title title="search rooms" />
         <form className='filter-form'>
         {/* select type  */}
            <div className="form-group">
               <label htmlFor="type">room type</label>
               <select name="type" id="type" value={type}
               className='form-control' onChange={handleChange}>
                  {types}
               </select>
            </div>
         {/* end select type*/}
         </form>
      </section>
   )
};

export default RoomsFilter


