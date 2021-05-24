import React from 'react';
import styled from 'styled-components';
import { menuItem } from './MenuItem';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';


const Nav = styled.div`
    background-color: #fff;
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 100;
    line-height: 80px;
    box-shadow: 0 2px 10px  rgba(0, 0, 0, 0.2);
`;
const NavContainer = styled.div`
    width: 88%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`;

const MobileBar = styled(FaBars)`
    display: none;
    @media screen and (max-width: 768px){
        display: flex;
        font-size: 25px;
        color: #F56362; 
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-120%, 125%);
        cursor: pointer;

        &:hover{ 
            color: #000;
            transition: 0.4s ease;
    }
    }
    
`;

const Logo = styled(Link)`
    font-size: 40px;
    font-family: 'Balsamiq Sans', cursive;
    font-weight: 700;
    letter-spacing: 1px;
    text-decoration: none;
    color: #F56362;

`;
const NavMenu = styled.div`
    display: flex;

    @media screen and (max-width: 768px){
        display: none;
    }

`;
const NavLink = styled(Link)`
    text-decoration: none;
    color: #000;
    padding-left: 20px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.7px;

    &.active {
    color: red;
  }

        &:hover{
            color: #F56362; 
        }
    
`;



const Navigation = ({toggle}) => {
    return (
        <Nav>
            <NavContainer>
                <MobileBar onClick={toggle}>
                    <FaBars />
                </MobileBar>
                <Logo to='/'>Valu</Logo>
                <NavMenu>
                    {menuItem.map((item, index) => (
                        <NavLink to={item.link} key={index}  >
                            {item.title}
                        </NavLink>
                    ))}
                </NavMenu>
            </NavContainer>
        </Nav>
    )
}

export default Navigation
