import React from 'react';
import styled from 'styled-components';
import { FeaturesData } from './FeaturesData';
import imgOne from '../../img/pic1.jpg'
import imgTwo from '../../img/pic2.jpg'


const FeaturesContainer = styled.div`
padding: 100px 0;
width: 88%;
margin: 0 auto;
`;
const FeaturesTitle = styled.h1`
    text-align: center;
    margin-top: 50px;
    & span{
            color: #F56362;
            font-family: 'Balsamiq Sans', cursive;
        }


`;
const FeaturesContent = styled.div``;


const Features = (props) => {

    return (
        <FeaturesContainer id='/features' duration={5000}>
            <FeaturesTitle>Fantastisches neues <span>Feature</span></FeaturesTitle>
            <FeaturesContent>
                <FeaturesData isReversed title='Wir sind eine digitale Kreativagentur' pragraphOne='Es ist seit langem bekannt, dass ein Leser durch den lesbaren Inhalt einer Seite abgelenkt wird, wenn er sich das Layout ansieht. Es ist seit langem bekannt, dass ein Leser abgelenkt wird.' pragraphTwo='Es ist seit langem bekannt, dass ein Leser beim Betrachten des Layouts vom lesbaren Inhalt einer Seite abgelenkt wird.' image={imgOne} />

                <FeaturesData title='Leistungsstarker und optimierter Code' pragraphOne='Es ist seit langem bekannt, dass ein Leser durch den lesbaren Inhalt einer Seite abgelenkt wird, wenn er sich das Layout ansieht. Es ist seit langem bekannt, dass ein Leser abgelenkt wird.' pragraphTwo='Es ist seit langem bekannt, dass ein Leser beim Betrachten des Layouts vom lesbaren Inhalt einer Seite abgelenkt wird.' image={imgTwo} />
            </FeaturesContent>
        </FeaturesContainer>
    )
}

export default Features
