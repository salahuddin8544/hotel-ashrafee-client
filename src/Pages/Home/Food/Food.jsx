import React from 'react';
import img1 from '../../../assets/show/2.jpg'
import img2 from '../../../assets/show/american-1334633_960_720.jpg'
import img3 from '../../../assets/show/bibimbap-4887394_960_720.jpg'
import img4 from '../../../assets/show/food-712665_960_720.jpg'
import FoodsItem from './FoodsItem';
const Food = () => {
    const foods=[
        {
            photo:img1,
            title:'Mountain View',
            description:'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains'
        },
        {
            photo:img2,
            title:'To The Beach',
            description:'Plan your next beach trip with these fabulous destinations'
        },
        {
            photo:img3,
            title:'Desert Destinations',
            description:"It's the desert you've always dreamed of"
        },
        {
            photo:img4,
            title:'Explore The Galaxy',
            description:'Seriously, straight up, just blast off into outer space today'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {
                foods.map((food,i)=> <FoodsItem
                key={i}
                food={food}
                ></FoodsItem>)
            }
          
        </div>
    );
};

export default Food;