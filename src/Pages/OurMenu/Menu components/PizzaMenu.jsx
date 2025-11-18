import React from 'react';
import UseMenu from '../../../Hooks/UseMenu.jsx';
import Menu from '../../Shared/Menu';

const PizzaMenu = () => {
    const [menu] = UseMenu()
    const pizzaMenu = menu.filter(items=>items.category==='pizza')
    return (
        <div className=' my-10 grid grid-cols-1 md:grid-cols-2 gap-8'>
            {
                pizzaMenu.map(item=><Menu item={item}></Menu>)
            }
        </div>
    );
};

export default PizzaMenu;