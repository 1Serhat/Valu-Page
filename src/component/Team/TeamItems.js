import React from 'react';
import styled from 'styled-components';

const TeamCard = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
text-align: center;
line-height: 1.7;
flex: 1;
padding: 0 10px;
margin: 20px 0;
min-width: 300px;




`;
const StaffImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto;
`;
const Staff = styled.h4`
    margin-bottom: 3px;
`;
const JobTitle = styled.p`
    margin-bottom: 3px;
    font-size: 14px;

    font-family: 'Balsamiq Sans', cursive;
    font-weight: 700;
    color: #F56362;

`;
const JobDesc = styled.p`
    margin-bottom: 3px;
    font-size: 14px;
`;
const TelNummer = styled.p`
    margin-bottom: 3px;
    font-size: 15px;
    
`;

export const TeamItems = (props) => {
    const { image, member, jobTitle, jobDesc, telNummer } = props;
    return (
        <TeamCard>
            <StaffImage src={image}/> 
            <Staff> {member}</Staff>
            <JobTitle> {jobTitle}</JobTitle>
            <JobDesc> {jobDesc} </JobDesc>
            <TelNummer> {telNummer} </TelNummer>
        </TeamCard>
    )
}

 
