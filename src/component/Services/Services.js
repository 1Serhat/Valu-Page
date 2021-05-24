import React from 'react';
import styled from 'styled-components';
import { ServicesItem } from './ServicesItem';
import { RiPencilRulerLine } from 'react-icons/ri';
import { GoLightBulb } from 'react-icons/go';
import { MdMovie } from 'react-icons/md';
import { FiHardDrive } from 'react-icons/fi';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { BiHeadphone } from 'react-icons/bi';
// import pencil from '../../img/pencil.svg'


const ServicesSection = styled.div`
    display: flex;
    padding: 100px 0;
    background-color: #fafafa;
`;
const ServicesContainer = styled.div`
    margin: 0 auto;
    width: 88%;
`;


const ServicesContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media screen and (max-width: 960px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }

`;
const ServicesTitle = styled.h2`
    text-align: center;
    margin-bottom: 50px;
    & span{
        color: #F56362;
        font-family: 'Balsamiq Sans', cursive;
        font-size: 25px;
    }
`;


const Services = (props) => {

    return (
        <ServicesSection id='/services' activeClass='active'>
            <ServicesContainer>
                <ServicesTitle>Bester <span>Service</span></ServicesTitle>
                <ServicesContent>
                    <ServicesItem icon={<RiPencilRulerLine/>}  title='UI / UX-Design' description='Lorem ipsum dolor sitzen amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.' />
                    <ServicesItem icon={<MdMovie/>}  title='Markenidentität' description='Lorem ipsum dolor sitzen amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.' />
                    <ServicesItem icon={<GoLightBulb/>}  title='Kreative Idee' description='Lorem ipsum dolor sitzen amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.' />
                    <ServicesItem icon={<FiHardDrive/>}  title='Einfach zu verwenden' description='Lorem ipsum dolor sitzen amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.' />
                    <ServicesItem icon={<AiOutlineAreaChart/>}  title='Dynamisches Wachstum' description='Lorem ipsum dolor sitzen amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.' />
                    <ServicesItem icon={<BiHeadphone/>}  title='Freundliche Unterstützung' description='Lorem ipsum dolor sitzen amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.' />
                </ServicesContent>
            </ServicesContainer>
        </ServicesSection>
    )
}

export default Services
