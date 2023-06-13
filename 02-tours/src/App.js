import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours,setTour]=useState([])
  const[loading,setLoading]=useState(true)

  const remove=(id)=>{
    const newtours=tours.filter((items)=>items.id===id);
    setTour(newtours)
  }

  const fetchTours=async()=>{
    setLoading(true);
    try {
      const response=await fetch(url)
      const data=await response.json()
      console.log(data)
      setLoading(false)
      setTour(data);
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchTours();

  },[])

  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
  // if (tour.length === 0) {
  //   return (
  //     <main>
  //       <div className='title'>
  //         <h2>no tours left</h2>
  //         <button className='btn' onClick={() => fetchTours()}>
  //           refresh
  //         </button>
  //       </div>
  //     </main>
  //   );
  // }

  return <main>
    <Tours tours={tours} remove={remove} />
  </main>;

};
export default App;
