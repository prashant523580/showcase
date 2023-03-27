import Image from 'next/image';
import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer, useParallax } from "react-scroll-parallax";
interface PropsTypes {
    bgImg?: any,
    children: any,
    headTitle?: any
    headDesc?: any
}
export default function Section(props: PropsTypes) {

    const target = React.useRef();
    const scroll = useParallax({
        speed:20,
        targetElement:target.current
    })
    return (
        <ParallaxBanner>
            <div>

<ParallaxBannerLayer
//  children={ {<Image src={props.bgImg} fill alt='cover' /> }} 
className='-z-10' 
image={props.bgImg} 
speed={10} />
            <div className='px-4 py-14 sm:py-20 lg:px-10'>
                {
                    props.headTitle &&
                    <div className="mx-auto flex justify-center items-center flex-col  max-w-2xl sm:text-center">
                        <h2 data-aos="fade-up" data-aos-duration="1000" className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl uppercase">{props.headTitle}</h2>
                        <div  data-aos="fade-up" data-aos-duration="1000" className="h-2 w-48  bg-orange-500 rounded-md"></div>
                        <p data-aos="zoom-in" data-aos-duration="1000" className="mt-2 text-3xl font-bold tracking-tight text-gray-800 light:text-gray-300 sm:text-4xl">
                            {props.headDesc}
                        </p>
                    </div>
                }
                {props.children}
                </div>
            </div>
        </ParallaxBanner>
    )
}
