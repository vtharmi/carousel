import React, { useEffect, useState } from "react";
import { GetCarouselImages } from "../services/api_collection";
import "../styles/styles.css";

function Carousel({slides, infinite}){
  const [state, setState] = useState(0);
  const [data, setData] = useState([])

  const prevSlideHandler = () => {
    let newPosition = state;
    console.log("state", newPosition)
    if (newPosition > 0) {
        newPosition = newPosition - 1;
    }
    setState(newPosition);
}

const nextSlideHandler = () => {
  let newPosition = state;
  if (newPosition < slides - 1) {
      newPosition = newPosition + 1;
  }
 
  setState(newPosition);
}

const prevClickHandler = () => {
  prevSlideHandler();
}

const nextClickHandler = () => {
  nextSlideHandler();
}
 
    const imgUrl = [
      "https://wallpaperbro.com/img/294233.jpg",
      "https://cdn.pixabay.com/photo/2015/07/03/15/46/wallpaper-830417_960_720.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSqb8L4hb9zljCAlV5WvTR42NuiTki0N9TRu7_nae&s",
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
      "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ];

    useEffect(() => {
     GetCarouselImages(`?slides=${slides}`).then(res => {
      setData(res);
      console.log("result", res)
     })
    }, [slides])


    return (
     <>
     {
      // data.length > 0 ?? (
        <div className="slide-container">
        <div className="mySlides fade">
          <div className="numbertext">{state} / {slides}</div>
        <div className="LeftArrow" onClick={prevClickHandler}>❰</div>
          <img className="image" src={imgUrl[state]} alt="slide"></img>
          {/* <div className="CarouselItem">
        {imgUrl.map(img => {
            <img  src={img} alt="slide" ></img>
        })}  
                </div> */}
            
        <div className="RightArrow" onClick={nextClickHandler}>❱</div>
        </div>
      
      </div>
      // )
     }
     </>
    );
  }


  export default Carousel;