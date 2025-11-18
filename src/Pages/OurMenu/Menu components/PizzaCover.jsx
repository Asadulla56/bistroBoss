import React from "react";
import HeroCover from "../../Shared/HeroCover";
import pizzaCover from "../../../assets/menu/pizza-bg.jpg";
const PizzaCover = () => {
  return (
    <div>
      <HeroCover
        img={pizzaCover}
        title={"PIZZA"}
        subtitle={
          "Savor the perfect slice! Our pizzas are baked to golden perfection with a crispy crust, gooey cheese, and fresh, flavorful toppings. From classic Margherita to bold specialty creations, every bite is a delicious experience that keeps you coming back for more."
        }
      />
    </div>
  );
};

export default PizzaCover;
