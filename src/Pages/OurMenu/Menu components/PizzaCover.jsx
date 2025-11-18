import React from 'react';
import HeroCover from '../../Shared/HeroCover';
import pizzaCover from '../../../assets/menu/pizza-bg.jpg'
const PizzaCover = () => {
    return (
        <div>
           <HeroCover img={pizzaCover} title={'PIZZA'} subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/> 
        </div>
    );
};

export default PizzaCover;