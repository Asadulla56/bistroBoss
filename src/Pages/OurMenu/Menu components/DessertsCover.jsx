import React from 'react';
import HeroCover from '../../Shared/HeroCover';
import dessertCover from '../../../assets/menu/dessert-bg.jpeg'
const DessertsCover = () => {
    return (
        <div className=''> 
           <HeroCover img={dessertCover} title={'DESSERTS'} subtitle={'Sweet treats to end your meal perfectly — from chocolate delights to fresh fruit desserts.'}/> 
            
        </div>
    );
};

export default DessertsCover;