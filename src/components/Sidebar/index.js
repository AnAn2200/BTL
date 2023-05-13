import React from 'react'
import { SideBarContainer, Icon, CloseIcon,SideBarWrapper,SideBtnWrap,SidebarLink,SidebarRoute,SidebarMenu } from './SidebarElement'

const SideBar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SideBarWrapper>
        <SidebarMenu>
            <SidebarLink to='about' >
                About
            </SidebarLink>
            <SidebarLink to='services' >
                Services
            </SidebarLink>
            <SidebarLink to='Products'>
                Products
            </SidebarLink>
            <SidebarLink to='signup' >
                Sign Up
            </SidebarLink>
        </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar