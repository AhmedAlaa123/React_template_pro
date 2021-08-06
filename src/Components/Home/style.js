import styled from "styled-components";
export const HomeSection=styled.section`
    height: 500px;
    background: url('https://ahmedalaa123.github.io/React_template_pro/images/Home/home-bg.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
`;

export const HomeInformation=styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
`;

export const HomeTitle=styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;
    margin-bottom:20px
`;


export const HomeInfo=styled.h4` 
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
`

export const HomeDescription=styled.p` 
    font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px
`

export const Span=styled.span`
    color: #000
`

export const HomeButton=styled.button`
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    border-radius:5px;
    transition:all 1s ease-in-out;
    &:hover{
        background: #fff;
        color: #eb5424;
        border:1px solid  #eb5424;

    }

`


    