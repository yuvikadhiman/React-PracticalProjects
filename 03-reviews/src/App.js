import reviews from "./data";
// npm install react-icons --save
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from "react-icons/fa";
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { useState } from "react";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];
  console.log(name);

  const checkNumber=(newIndex)=>{
    if (newIndex>reviews.length-1){
      return 0;
    }
    if (newIndex<0){
      return reviews.length-1;
    }
    return(newIndex)
    
  }
  const nextPerson = () => {
    setIndex((currIndex) => {
      const newIndex = currIndex + 1;
      return(checkNumber(newIndex))
    })
  };
  const prevPerson = () => {
    setIndex((currIndex) => {
      const newIndex = currIndex - 1;
      
      return(checkNumber(newIndex))
    });
  };

  const randomPerson=()=>{
    let random=Math.floor(Math.random()*reviews.length)
    console.log(random)
    if(random===index){
      random=index+1
    }
    setIndex(checkNumber(random))
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn">
            <FaChevronCircleLeft onClick={prevPerson} />
          </button>
          <button className="next-btn">
            <FaChevronCircleRight onClick={nextPerson} />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>surprise me</button>
      </article>
    </main>
  );
};
export default App;
