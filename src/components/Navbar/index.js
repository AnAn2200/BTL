import React from 'react'
import { NavbarContainer, NavLogo, Nav, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink, SearchBar} from './NavbarElement'
import {FaBars} from 'react-icons/fa'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
        <NavbarContainer>
                <NavLogo to='/'>
                    Phone
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>Trang chủ</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'>Liên hệ</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'>Sản phẩm</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks  to='SignupPage'>Đăng nhập</NavLinks>
                    </NavItem>
                </NavMenu>
                <SearchBar>
                    <input type='text' placeholder='SEARCH'/>
                    <button type='submit' value="search">Search</button>
                </SearchBar>
                <NavBtn>
                    <NavBtnLink to='signin'>ĐĂNG KÝ</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar