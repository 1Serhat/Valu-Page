import React from 'react';
import { Button } from '.././Button';
import styled from 'styled-components';
import HeroImg from '../../img/hero4.jpg'

const HeroSection = styled.div`
    position: relative;
    top: 80px;
    background-image: url(${HeroImg});
    width: 100%;
    height: 700px;
    background-position: center;
    background-size: cover;
    overflow: hidden;

`;

const HeroContainer = styled.div`
    width: 88%;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
`;
const HeroContent = styled.div`
    line-height: 1.5;
`;
const Subtitle = styled.h3`
    color: #fff;
    font-family: 'Balsamiq Sans', cursive;
    font-size: 25px;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px black;
    @media screen and (max-width: 768px){
        font-size: 19px;
    }
`;
const Title = styled.h1`
    font-size: 60px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #fff;
    opacity: 1;
    z-index: 1;
    text-shadow: 1px 1px 2px #000;
    position: relative;
    padding-bottom: 10px;
    width: 100%;
    margin-bottom: 60px;
    @media screen and (max-width: 768px){
        font-size: 35px;
    }
    @media screen and (max-width: 568px){
        font-size: 28px;
    }


`;
const ButtonWrapper = styled.div`
    display: inline-block;
    
`;


const Hero = () => {
    return (
        <HeroSection id='/'>
            <HeroContainer>
                <HeroContent>
                    <Subtitle>Saubere und professionelle,</Subtitle>
                    <Title>Mehrzweck-Landingpage</Title>
                    <ButtonWrapper>
                        <Button to='/'
                            isbig='true'
                            isred='true'
                            iswhite='true'
                            >Mehr Erfahren
                        </Button>
                    </ButtonWrapper>
                </HeroContent>
            </HeroContainer>
        </HeroSection>
    )
}

export default Hero
