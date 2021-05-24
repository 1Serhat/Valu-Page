import React from 'react';
import styled from 'styled-components';
import { TeamItems } from './TeamItems';
import Jonathan from '../../img/s_jonathan.jpg'
import Gianmarco from '../../img/s_gianmarco.jpg'
import Laura from '../../img/s_laura.jpg'
import Patricia from '../../img/s_patricia.jpg'
import Amir from '../../img/s_amir.jpg'
import Mutzii from '../../img/s_mutzii.jpg'



const TeamSection = styled.div`
    padding: 100px 0;
    width: 100%;
    display: flex;
    overflow: hidden;
    height: auto;
    
`;
const TeamContainer = styled.div`
    width: 92%;
    margin: 0 auto;
`;
const TeamTitle = styled.h2`
    text-align: center;
    margin-bottom: 50px;

    & span{
        color: #F56362;
        font-family: 'Balsamiq Sans', cursive;
        font-size: 25px;
    }
`;
const TeamContent = styled.div`
/* display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 30px; */
display: flex;
flex-direction: row;
flex-wrap: wrap;

`;


const Team = (props) => {
    return (
        <TeamSection id='/team'>
            <TeamContainer>
                <TeamTitle>Our Creative <span>Team</span></TeamTitle>
                <TeamContent>
                    <TeamItems image={Jonathan} member='Jonathan' jobTitle='CEO/Founder' jobDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.' telNummer= '+41 79 300 40 00'/>
                    <TeamItems image={Gianmarco} member='Gianmarco' jobTitle='Frontend Developer' jobDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.' telNummer='+41 79 540 12 00'/>
                    <TeamItems image={Laura} member='Laura' jobTitle='Senior UX Writer' jobDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.' telNummer='+41 79 320 00 20'/>
                    <TeamItems image={Patricia} member='Patricia' jobTitle='UX Research Specialist' jobDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.' telNummer='+41 78 509 76 20'/>
                    <TeamItems image={Mutzii} member='Mutzii' jobTitle='UI/UX Designer' jobDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.' telNummer='+41 76 398 80 11'/>
                    <TeamItems image={Amir} member='Amir' jobTitle='Fullstack Developer' jobDesc='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.' telNummer='+41 79 320 65 20'/>
                </TeamContent>
            </TeamContainer>
        </TeamSection>
    )
}

export default Team
