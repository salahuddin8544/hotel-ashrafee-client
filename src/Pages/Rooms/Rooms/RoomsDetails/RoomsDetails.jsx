import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import RoomsDetailsBanner from '../../RommsDetailsBanner/RoomsDetailsBanner';
import RoomsDetailsItem from '../../RoomsDetailsItem/RoomsDetailsItem';
import RoomsDetailsFeatures from '../../RoomsDetailsFeatures/RoomsDetailsFeatures';
import Loading from '../../../../Shared/Loading/Loading';

const RoomsDetails = () => {
    const {_id,bgImg,price,name, title, subTitle,facilities,subImg,subTitle2,subTitle3,description2,roomFeatures,subImg2,subImg3,accommodations } = useLoaderData();
    const navigation = useNavigation()
    if( navigation.state === "loading"){
        return <Loading></Loading>
    }

    return (
        <div>
            <RoomsDetailsBanner
                bgImg={bgImg}
                title={title}
                subTitle={subTitle}
                facilities={facilities}
            ></RoomsDetailsBanner>
            <div className=' bg-base mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-4  py-11 text-center mx-auto  text-black'>
                    <p className='text-lg mt-4 md:mt-0'>{facilities[0]}</p>
                    <p className='text-lg mt-4 md:mt-0'>{facilities[1]}</p>
                    <p className='text-lg mt-4 md:mt-0'>{facilities[2]}</p>
                    <p className='text-lg mt-4 md:mt-0'>{facilities[3]}</p>
                </div>
            </div> <RoomsDetailsFeatures
            roomFeatures={roomFeatures}
            subImg2={subImg2}
            subImg3={subImg3}
            accommodations={accommodations}
            ></RoomsDetailsFeatures>
            <RoomsDetailsItem
            name={name}
            price={price}
            accommodations={accommodations}
            subImg={subImg}
            subTitle2={subTitle2}
            subTitle3={subTitle3}
            description2={description2}
            _id={_id}
            ></RoomsDetailsItem>
        </div>
    );
};

export default RoomsDetails;