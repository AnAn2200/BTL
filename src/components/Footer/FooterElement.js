import styled from "styled-components";
import { Link } from "react-router-dom";

export var FooterContainer = styled.footer`
    background-color: #101522;
`
export var FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export var FooterLinkContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`

export var FooterLinkWrap = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export var FooterLinkItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`
export var FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

export var FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover{
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`

export var SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export var SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export var SocialLogo = styled(Link)`
    color: #fff;
    cursor: pointer;
    justify-self: start;
    text-decoration: none;
    display: flex;
    font-size: 1.5rem;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

export var Website = styled.small`
    color: #fff;
    margin-bottom: 16px;
`


export var SocialIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export var SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`


