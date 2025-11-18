import React, { useEffect, useState } from 'react';
import ShareTitle from '../../Shared/ShareTitle';
import Card from '../../Shared/Card';

const RECOMMENDS = () => {
    const [recommendItems,setRecommendItems] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const recommendItems = data.filter(item=>item.price >= 14.8)
            setRecommendItems(recommendItems)
        })

    },[])
    return (
        <div>
            <section>
            <ShareTitle title={'CHEF RECOMMENDS'} subtitle={'---Should Try---'} />

            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
                {
                    recommendItems.map(item=><Card key={item._id} item={item}/>)
                }

            </section>
            
        </div>
    );
};

export default RECOMMENDS;