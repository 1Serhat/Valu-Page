import React from 'react';
import { Button } from '../Button';
import styled from 'styled-components';


const ProductContainer = styled.div`
    padding: 50px 0;
    display: flex;
    flex-direction: ${({ isReversed }) => (isReversed && "row-reverse")};
    width: 100%;
    height: 600px;
    overflow: hidden;
    line-height: 1.7;
    @media screen and (max-width: 768px){
        flex-direction: column;
        height: auto;
    }

`;
const ProductImage = styled.img`
display: flex;
justify-content: center;
align-items: center;
flex: 1;


img{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
}
`;
const ProductContent = styled.div`
display: flex;
flex-direction: column;
flex: 1;
justify-content: center;
/* align-items: center;  */
height: 100%;


`;
const Title = styled.h2``;

const PragraphOne = styled.p`
font-size: 15px;

`;
const PragraphTwo = styled.p`
font-size: 15px;
margin-bottom: 50px;
`;
const BtnWrapper = styled.div`
    display: inline-block;

`;

export const FeaturesData = (props) => {
    const { title, image, pragraphOne, pragraphTwo, isReversed } = props;
    return (
        <ProductContainer isReversed={isReversed}>
            <ProductImage src={image} />
            <ProductContent>
                <Title>{title}</Title>
                <PragraphOne>{pragraphOne}</PragraphOne>
                <PragraphTwo>{pragraphTwo}</PragraphTwo>
                <BtnWrapper>
                    <Button isred='true' iswhite='true'>Mehr erfahren</Button>
                </BtnWrapper>
            </ProductContent>
        </ProductContainer>
    )
}


