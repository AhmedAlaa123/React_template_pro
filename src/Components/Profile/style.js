import styled from 'styled-components'
export const ProfileSection=styled.section` 
    padding: 50px 0;
    overflow: hidden;
`

export const ProfileBox=styled.div`
    width: 50%;
    float: left;
    @media (max-width:768px){
        width: 100%;
        float: none
        margin-bottom: 20px
    }
`

export const ProfileList=styled.ul` 
    list-style: none
`

export const ProfileItem=styled.li`
    margin-bottom: 8px
`

export const Span=styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
`

export const SpanWeb=styled.span`
    font-weight: normal;
    color: #eb5424
`

export const Skills=styled.div` 
    width: 50%;
    float: left;
    @media (max-width:768px){
        width: 100%;
        float: none
    }
`

export const SkillDescription=styled.p` 
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const Bar=styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const BarTitle=styled.span` 
    float:left;
    font-size:30px;
    font-weight:500
`

export const Percentage=styled.span` 
    float: right;
    margin-right: 10px;
    font-weight:700;
    color:#eb5424
    
    
`

export const Parent=styled.div` 
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const LinePercentage=styled.span` 
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width:${props=>props.percent};
    
`
export const ProfileTitle=styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
   
`

export const ProfileTitleSpan=styled.span` font-weight: normal;`
export const SkillTitleSpan=styled.span` font-weight: normal;`
export const Skillstitle=styled.h2`
font-size: 40px; 
margin-bottom: 20px`;