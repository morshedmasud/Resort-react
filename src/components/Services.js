import React, {Component} from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/all";

import Title from './Title';


class Services extends Component {
   state = {
      services: [
         {
            icon: <FaCocktail/>,
            title: "Free cocktails",
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, dolore, quaerat. Ad at explicabo in ipsum iste numquam quis repellat?'
         },
         {
            icon: <FaHiking/>,
            title: "Endless Hiking",
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, dolore, quaerat. Ad at explicabo in ipsum iste numquam quis repellat?'
         },
         {
            icon: <FaShuttleVan/>,
            title: "Free Shuttle",
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, dolore, quaerat. Ad at explicabo in ipsum iste numquam quis repellat?'
         },
         {
            icon: <FaBeer/>,
            title: "Free Beer",
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, dolore, quaerat. Ad at explicabo in ipsum iste numquam quis repellat?'
         },
      ]
   };
   render() {
      return (
         <section className='services'>
            <Title title='services'/>
            <div className='services-center'>
               {this.state.services.map((item, index) => {
                  return (
                     <article key={index} className='service'>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                     </article>
                  )
               })}
            </div>
         </section>
      );
   }
}

export default Services;