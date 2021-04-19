import React, { useState } from 'react'
import { FirstContainer, FirstContent, FirstH1, FirstP, FirstBtnWrapper, ArrowForward, ArrowRight, FirstBg } from './FirstSectionElements'
import { CarouselHomePage } from '../CarouselHomePage';
export const FirstSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <FirstContainer id="carouselhomepage">
            <FirstBg>
            </FirstBg>
            <FirstContent>
                <CarouselHomePage />
            </FirstContent>
        </FirstContainer >
    )
}

    ;
