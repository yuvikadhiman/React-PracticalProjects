import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours,setTour]=useState([])
  const[loading,setLoading]=useState(true)

  const removeItem = (id) => {
    const newPeople = tours.filter((tour) => tour.id !== id);
    console.log('hello')
    setTour(newPeople);
  };

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
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return <main>
    <Tours tours={tours}  removeItem={removeItem} />
  </main>;

};
export default App;
