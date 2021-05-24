import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
padding: ${({isbig}) => (isbig ? '20px 40px' : '10px 20px')};
background-color: ${({isred}) => (isred ? '#F56362': '#fff')};
font-size: 15px;
text-transform: uppercase;
color: ${({iswhite}) => (iswhite ? '#fff' : '#F56362')};
border-radius: 10px;
text-decoration: none;
font-weight: 700;
border: 1px solid #F56362;
cursor: pointer;
z-index: 110;

&:hover{
    transform: scale(1.05);
    transition: 0.4s ease;
}
`;