import React from 'react';
import {useState,useEffect} from 'react';
import Loading from './Loading';
import Tours from './Tours';
const url = "https://course-api.com/react-tours-project";


const App = () => {
 const [loading,setLoading] = useState(true);
 const [tours,setTours] = useState([]);

 const notInterested = (id)=>{
  let newTours = tours.filter((tour)=>tour.id !== id);
  setTours(newTours);
 }

  const fetchTours = async ()=>{
   setLoading(true);
   try {
    
   const response = await fetch(url);
   const tours = await response.json();
  setLoading(false);
  setTours(tours);
  console.log(tours);
    
   } catch (error) {
    setLoading(false);
    console.log(error);

    
   }
  
 }
 useEffect(()=>{
    fetchTours();
   },[])

 if(loading) {
  return <Loading/>
 }
 if(tours.length === 0){
  return <section>
    <h2>No Tours Left</h2>
    <button className='clear' onClick={()=>fetchTours()}>Refresh</button>
  </section>
}


  return<section>
   <Tours tours={tours} notInterested={notInterested}/>
  </section>
}


export default App
