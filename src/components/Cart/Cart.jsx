/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const Cart = ({ selectedActor, remaining,totalCost2, totalCost, handleControl }) => {
  return (
    <div>
      <h5 className="remainingCredit"> Credit Hours Remaining: {remaining} hr</h5>
      <h3 className="courseName">Course Name</h3>
      {selectedActor.map((actor) => (
        <li className="cartLi" key={actor.id}>{actor.name}</li>
        
      ))}
      <h5 className="totalCreditHour">Total Credit Hour: {totalCost}</h5>
    </div>
  );
};

export default Cart;