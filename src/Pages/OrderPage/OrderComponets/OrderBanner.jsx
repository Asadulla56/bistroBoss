import React from 'react';
import HeroCover from './../../Shared/HeroCover';
import orderCover from '../../../assets/shop/banner2.jpg'

const OrderBanner = () => {
    return (
        <div>
            <HeroCover img={orderCover} title={'Our Shop'} subtitle={'Would you like to try a dish?'}/>
            
        </div>
    );
};

export default OrderBanner;