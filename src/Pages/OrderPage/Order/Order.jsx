import React, { useState } from 'react';
import OrderBanner from '../OrderComponets/OrderBanner';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {UseMenu }from '.../../hooks/UseMenu';
import Card from '../../Shared/Card';

const Order = () => {
    const [tabIndex,setTabIndex] = useState(0)
    const [page,setPage] = useState(1)
    const [menu] = UseMenu()
    
   
    const pizzaMenu = menu.filter(items=>items.category==='pizza')
    const saladMenu = menu.filter(items=>items.category==='salad')
    const soupMenu = menu.filter(items=>items.category==='soup')
    const drinksMenu = menu.filter(items=>items.category==='drinks')
    const dessertMenu = menu.filter(items=>items.category==='dessert')
    const saladPage = Math.ceil(saladMenu.length/4)

    const paginatedSaladMenu = saladMenu.slice(
      (page - 1) * 4,
      page * 4
  );
    return (
        <div>
          <OrderBanner/>
          <section className=''>
          <Tabs className={'w-10/12 mx-auto'} defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList className={'flex justify-center my-7'}>
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>Soups</Tab>
      <Tab>Desserts</Tab>
      <Tab>Drinks</Tab>
    </TabList>

    <TabPanel>
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
      {
        paginatedSaladMenu.map(item=><Card item={item}></Card>)
      }
      </section>
      <div className="join">
  <button onClick={()=>setPage(page-1)}  disabled={page <= 1} className="join-item btn">«</button>
  <button className="join-item btn">{page}</button>
  <button onClick={()=>setPage(page+1)} disabled={page >= saladPage} className="join-item btn">»</button>
</div>
    </TabPanel>
    <TabPanel>
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
      {
        pizzaMenu.map(item=><Card item={item}></Card>)
      }
      </section>
    </TabPanel>
    <TabPanel>
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
      {
       soupMenu.map(item=><Card item={item}></Card>)
      }
      </section>
    </TabPanel>
    <TabPanel>
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
      {
        dessertMenu.map(item=><Card item={item}></Card>)
      }
      </section>
    </TabPanel>
    <TabPanel>
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
      {
        drinksMenu.map(item=><Card item={item}></Card>)
      }
      </section>
    </TabPanel>
  </Tabs>

          </section>
            
        </div>
    );
};

export default Order;