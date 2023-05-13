import styled from "styled-components";
import {Link as LinkS} from 'react-router-dom'

export var ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: row;
    
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 100%;
    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export var ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }


    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export var ServicesCard =styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 400px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export var ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export var ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: black;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export var ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export var ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export var Share= styled(LinkS)`
    cursor: pointer;
    text-decoration: none;
`


