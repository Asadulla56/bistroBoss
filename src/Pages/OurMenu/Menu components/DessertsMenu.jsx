import React from 'react';
import UseMenu from '../../../Hooks/UseMenu.jsx';
import Menu from '../../Shared/Menu';

const DessertsMenu = () => {
    const [menu] = UseMenu()
    const dessertMenu = menu.filter(items=>items.category==='dessert')
    return (
        <div className='my-20'>
             <section className='grid gird-cols-1 md:grid-cols-2 gap-8 mb-10 w-10/12 mx-auto '>
                {
                    dessertMenu.map(item=><Menu item={item}></Menu>)
                }

            </section>
            
        </div>
    );
};

export default DessertsMenu;