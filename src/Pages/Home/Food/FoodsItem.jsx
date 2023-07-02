import React from 'react';

const FoodsItem = ({food}) => {
    const{title,description,photo} = food;
    return (
        <div className='relative group hover:bg-black overflow-hidden '>
       <div className='h-96 w-full'>
       <img className='h-full w-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125' src={photo} alt="" />
       </div>
       <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>

       </div>
       <div className='absolute w-full h-96 text-center text-white top-3/4 group-hover:top-24 transition-transform group-hover:duration-1000 px-3 '>
       <h3 className='text-xl font-bold'>{title}</h3>
        <p className='hidden  group-hover:block'>{description}</p>
       </div>
        </div>
    );
};

export default FoodsItem;