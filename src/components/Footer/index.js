import React from 'react'
import { FooterContainer, FooterLink, FooterLinkContainer,
     FooterLinkItem,FooterLinkWrap, 
     FooterLinkTitle,FooterWrap, SocialIcon, SocialIconLink,
     SocialLogo, SocialMedia, SocialMediaWrap,Website } from './FooterElement'
import {FaYoutube, FaFacebook, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrap>
                        <FooterLinkItem>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to='/'>How</FooterLink>
                                <FooterLink to='/'>Test</FooterLink>
                                <FooterLink to='/'>Careers</FooterLink>
                                <FooterLink to='/'>Investors</FooterLink>
                                <FooterLink to='/'>Term of Services</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to='/'>How</FooterLink>
                                <FooterLink to='/'>Test</FooterLink>
                                <FooterLink to='/'>Careers</FooterLink>
                                <FooterLink to='/'>Investors</FooterLink>
                                <FooterLink to='/'>Term of Services</FooterLink>
                        </FooterLinkItem>
                    </FooterLinkWrap>
                    <FooterLinkWrap>
                        <FooterLinkItem>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to='/'>How</FooterLink>
                                <FooterLink to='/'>Test</FooterLink>
                                <FooterLink to='/'>Careers</FooterLink>
                                <FooterLink to='/'>Investors</FooterLink>
                                <FooterLink to='/'>Term of Services</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to='/'>How</FooterLink>
                                <FooterLink to='/'>Test</FooterLink>
                                <FooterLink to='/'>Careers</FooterLink>
                                <FooterLink to='/'>Investors</FooterLink>
                                <FooterLink to='/'>Term of Services</FooterLink>
                        </FooterLinkItem>
                    </FooterLinkWrap>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Phone
                        </SocialLogo>
                        <Website>Phone &copy; {new Date().getFullYear()} All rights reserved.</Website>
                        <SocialIcon>
                            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    </>
  )
}

export default Footer