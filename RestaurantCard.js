 import React from 'react'
 import data  from './data';

const RestaurantCard =({name,price,rating,deliveryTime,url}) => {
  return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="logo"
          alt="res-logo"
          src={url}
        />
        <h3>{name}</h3>
        <h4>{rating+[' ']}star </h4>
        <h4>{deliveryTime}utes</h4>
        <h4>₹{price}FOR TWO</h4>
        
      </div>
      
  );
}

export default RestaurantCard
