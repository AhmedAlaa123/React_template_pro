import styled from 'styled-components';

export const AboutSection=styled.section`
    min-height: 500px;
    background: url('https://ahmedalaa123.github.io/React_template_pro/images/creative/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    overflow: hidden;

    @media (max-width:991px) {
            height: auto   
    }

`

export const AboutInfo=styled.div` 
    padding-top: 20px;
    width: 50%;
    float: right;
    @media (max-width:991px) {
            width: 100%;
            padding-top: 10px;
            float: none
       
    }
`

export const InfoTitle=styled.h2` 
    font-weight: bold;
    font-size: 50px;
    margin-bottom:10px
`
export const Span=styled.span` 
    font-weight: normal
`

export const InfoDir=styled.h4` 
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px;
    margin-top:0px;
    @media (max-width:991px) {
            font-size: 30px
    }
`

export const InfoDescription=styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8
`

 export const Anchor=styled.a`
    text-decoration: none
`

