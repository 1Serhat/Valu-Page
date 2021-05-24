import React from 'react';
import styled from 'styled-components';

const ServicesItems = styled.div``;
const Card = styled.div`
display: grid;
grid-template-columns: 30% 70%;
width: 100%;
height: 140px;
/* flex: 1 1 auto; */



`;
const CardIcon = styled.p`
margin-right: 20px;
font-size: 70px;
color: #F56362;

/* display: flex;
justify-content: flex-start;
align-items: center; */
`;
const CardContent = styled.div`
width: 100%;
`;
const CardTitle = styled.h4``;
const CardDesc = styled.p`
line-height: 1.7;
font-size: 15px;
`;




export const ServicesItem = (props) => {
    const { icon, title, description } = props;
    return (
        <ServicesItems>
            <Card>
                <CardIcon>{ icon }</CardIcon>
                <CardContent>
                    <CardTitle>{title}</CardTitle>
                    <CardDesc>{description}</CardDesc>
                </CardContent>
            </Card>

        </ServicesItems>
    )
}





    
