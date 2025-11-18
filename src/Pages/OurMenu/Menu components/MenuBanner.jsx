import React from 'react';
import HeroCover from '../../Shared/HeroCover';
import menuImg from '../../../assets/menu/banner3.jpg'
const MenuBanner = () => {
    return (
        <div>
            <HeroCover img={menuImg} title={'OUR MENU'} subtitle={'Would you like to try a dish?'}/>
            
        </div>
    );
};

export default MenuBanner;