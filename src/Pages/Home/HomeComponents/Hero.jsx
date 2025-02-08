import React from 'react';
import imgbg from '../../../assets/home/chef-service.jpg'
const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${imgbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}  className='p-20 my-20 bg-fixed'>
            <div className='p-10 bg-slate-200 flex flex-col justify-center items-center gap-4'>
                <h1 className='text-5xl text-black font-thin text-center'>Bistro Boss</h1>
                <p className='text-center font-thin text-black'>The cake was moist and rich, with a creamy frosting.The soup was warm and comforting, perfect for a cold day.The steak was tender and juicy, cooked to perfection.The salad was fresh and crunchy, with a tangy dressing.The curry was bursting with flavor and had just the right amount of spice.</p>

            </div>
            
        </div>
    );
};

export default Hero;