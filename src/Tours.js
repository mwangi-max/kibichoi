import React from 'react';
import Tour from './Tour';

const Tours = ({tours,notInterested}) => {
  return (
    <section>
      <h2>Explore The Tours</h2>
     {
      tours.map((tour)=>{
       return <Tour key={tour.id}{...tour}notInterested = {notInterested}/>
      })
     }
    </section>
  )
}

export default Tours
