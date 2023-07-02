import React from 'react';
import SingleAboutFeatures from './SingleAboutFeatures';

const AboutFeaures = () => {
    const aboutFeatures = [
        {
            photo:'https://hotellerv5.b-cdn.net/boutique/wp-content/uploads/sites/2/2018/09/101048866-768x576.jpg',
            year:'2000',
            description:'Foam padding in the insoles leather finest quality staple flat slip-on design pointed toe off-duty shoe. Black knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral.'
        },
        {
            photo:'https://hotellerv5.b-cdn.net/boutique/wp-content/uploads/sites/2/2019/06/bride-and-groom-having-meal-with-friends-at-PUDM5NY-768x538.jpg',
            year:'2017',
            description:'Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretchy.'
        },
        {
            photo:'https://hotellerv5.b-cdn.net/boutique/wp-content/uploads/sites/2/2019/06/chambermaid-changing-bed-linen-on-the-bed-in-a-PMUYXS6-768x512.jpg',
            year:'2006',
            description:'Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets.'
        },
        {
            photo:'https://hotellerv5.b-cdn.net/boutique/wp-content/uploads/sites/2/2019/06/pont-saint-pierre-and-hotel-dieu-saint-jacques-ERV3QDU-768x512.jpg',
            year:'2012',
            description:'Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretchy.'
        },
        
    ]
    return (
        <div className='mt-16'>
            <div className='text-center md:px-48'>
                <h5 className='font-description text-xl'>Urban & Unique</h5>
                <h2 className='text-xl md:text-4xl my-4'>Alpine Hideaway Resort Experience wonders of Prague</h2>
                <p className='font-description text-lg p-2 md:text-xl'>Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design slingback strap mid kitten heel this ladylike design. Leather detail shoulder contrast colour contour stunning silhouette working peplum.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-16 w-11/12 mx-auto mt-32 my-16'>
                {
                    aboutFeatures.map((feature,i)=> <SingleAboutFeatures
                    key={i}
                    feature={feature}
                    ></SingleAboutFeatures>)
                }
                </div>
        </div>
    );
};

export default AboutFeaures;