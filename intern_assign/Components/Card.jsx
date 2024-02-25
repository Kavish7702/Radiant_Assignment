import React from "react";
import "./SecondComponent.css";
import image from "./Images/firstImage.png";

const Card = () => {
  return (
    <div className="Card">
      <div className="cardImage">
        <img src={image} alt="404 Not Found" />
      </div>
      <div className="cardText">
        <div id="offers">
          <div className="offerText">20% Off</div>
          <div className="offerText">Limited time</div>
        </div>
        <div>
          <h2 style={{ textAlign: "center",margin:"1rem 0",fontWeight:"500"}}>Webbuilder 1</h2>
          <div
            style={{ display: "flex", justifyContent: "center", height: "10%" }}
          >
            <p
              style={{
                textAlign: "left",
                width: "90%",
                fontWeight: "450",
                fontSize: "17px",
                marginTop:"5px",
                marginBottom:"5px"
              }}
            >
              Computer Modern classic with wix support
            </p>
          </div>
          <div className="price">
            <div>$39.96</div>
            <div style={{fontSize:"medium"}}>$49.96</div>
            <div>(20% Off)</div>
          </div>
          <div style={{ textAlign: "center", margin: "1rem 0" }}>
            <button style={{ width: "90%" }}>View Deal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
