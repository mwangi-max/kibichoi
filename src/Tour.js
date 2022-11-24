import React from 'react';
import {useState} from 'react';

const Tour = ({id,name,image,info,price,notInterested}) => {
  const[readMore,setReadMore] = useState(false);
  return (
     <section>
      
      <div className='center'>

           <figure>

        <img src={image} alt={name} className='img'/>
  
      </figure>
      <div className='price'>
        <h3>{name}</h3>
        <h4>${price}</h4>
        </div>
        <footer>
        <p>
          {readMore?info : `${info.substring(0,200)}...`}
          <button onClick={()=>setReadMore(!readMore)} className='show'>{readMore?'Show Less':'Show More'}</button>
        </p>
        </footer>

        <button className='clear'onClick={()=>{return(notInterested(id))}}>Not Interested</button>
      



      </div>
     
     </section>
  )
}

export default Tour
