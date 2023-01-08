import React from "react";
import data from "../Utils/data.json";
import "../Styles/Feed.css";
const Feed = () => {
  const products = data;
  return (
    <div className="outer">
      <div className="gallery">
        {products.map((element) => {
          return (
            <div className="content" key={element.name}>
              <img src={element.imageURL} />
              <h3>{element.name.slice(0, 15)}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <h6>${element.price}</h6>
              <ul>
                <li>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </li>
                <li>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </li>
                <li>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </li>
                <li>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </li>
                <li>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </li>
              </ul>
              <button className="buy-1">Buy Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Feed;
