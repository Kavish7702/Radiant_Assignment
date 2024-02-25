import React from 'react';
import firstImage from "./Images/firstImage.png";
import "./FirstComponent.css";

const FirstComponent = ({cnt,rating}) => {
  return (
    <div className="container">
      <div className="imageSection">
        <div id="countComponent"><strong style={{padding:"0.8rem",borderRadius:"100%",boxShadow:"1px 1px 8px grey"}}>{cnt}</strong></div>
        <img src={firstImage} alt="404 Not Found" />
        <p>Builder 1</p>
      </div>
      <div className="textSection">
        <p><strong>WixPro 72-Inch Responsive Website Builder- </strong>Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
        <h4 style={{margin:"1rem 0"}}>Main Highlights</h4>
        <p style={{transform:"translate(1rem,0)",marginBottom:"1rem"}}>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>

        <a href="/">Show More</a>
      </div>
      <div className="ratingSection">
        <div id='ratingNumber'>
            <p style={{fontWeight:"400",fontSize:"32px",margin:"0"}}>{rating}</p>
            <p>Exceptional</p>
            <p>⭐⭐⭐⭐⭐</p>
        </div>
        <button>View</button>
      </div>
    </div>
  )
}

export default FirstComponent
