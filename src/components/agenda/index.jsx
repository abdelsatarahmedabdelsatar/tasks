import { Carousel } from 'primereact/carousel';
import { useState } from 'react';
import { carousellItem } from '../../data/agendaData';

import Template from './ProductTemplate';
const Main = () => {

    const [backImage, SetBackImage] = useState("https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--406dc06e-fef2-44ab-a036-07035797dfa6/ey-silhouette-of-boy-flexing-his-muscles-on-blue-beach-umbrella-hero.jpg?quality=85&width=2000&preferwebp=true");

    const responsiveOptions = [
        {
            breakpoint: "1600",
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: "968",
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: "600",
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (item) => {

        return (
            <Template item={item} SetBackImage={SetBackImage} />
        )

    }

    return (
        <>
            <div className='text-white bg-cover bg-no-repeat bg-center relative' style={{ backgroundImage: `url(${backImage})` }}>
                <div className='absolute w-full h-full bg-gray-900 bg-opacity-45'></div>
                <h1 className='absolute top-20 left-20 text-5xl z-10 font-semibold'>On the agenda ({carousellItem.length})</h1>
                <Carousel responsiveOptions={responsiveOptions} value={carousellItem} numScroll={1} numVisible={4} itemTemplate={productTemplate} />
            </div>
        </>
    )

}

export default Main;