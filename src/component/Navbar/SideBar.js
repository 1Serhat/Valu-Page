import React from 'react';
import { menuItem } from './MenuItem'
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F56362;
    position: fixed;
    z-index: 999;
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    opacity: 1;
    transition: 0.5s ease-in-out;

`;
const CloseIcon = styled(FaTimes)`
        font-size: 25px;
        color: #fff; 
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-120%, 125%);
        cursor: pointer;
        &:hover{ 
            color: #000;
            transition: 0.4s ease;
    }
`;
const MainMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    line-height: 80px;
`;
const SidebarLink = styled(Link)`
    font-size: 20px;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.7px;
    transition: all 0.4s ease;
    &:hover{
        transform: scale(1.08);
        color: #000;
        transition: all 0.4s ease;
    }
`;



const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} toggle={toggle}>
        <CloseIcon onClick={toggle}>
        <FaTimes/>
        </CloseIcon>
        <MainMenu>
            {menuItem.map((item, index) =>  (
                <SidebarLink to={item.link} key={index} onClick={toggle}>
                    {item.title}
                </SidebarLink>
            ))}
        </MainMenu>   
        </SidebarContainer>
    )
}

export default SideBar
