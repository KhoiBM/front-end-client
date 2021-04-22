/* eslint-disable react/prop-types */
import React from 'react'
import { InfoContainer, InfoRow, InfoWrapper, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img, Column2 } from './InfoElemenst'
import { ButtonR } from 'src/app/modules/core/components/CustomStyles';


export const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2, link }) => {
    console.log("lightText: " + lightText);

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <ButtonR to={`${link}`}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}>
                                        {buttonLabel}</ButtonR>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}


