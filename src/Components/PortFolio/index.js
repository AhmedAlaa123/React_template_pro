import React ,{useState,useEffect} from 'react';
import {PortfolioSection,PortfolioTitle,Span,PortfolioList,PortfolioItem,GallaryItem,GallaryItemImage,Overllay,OverllaySpan,} from'./style.js'
import axios from 'axios';
const Portfolio =(props)=>{
// we will use hook way to making set state in method component
// first importing two method form react 
// import {useState,useEffect}  useState() Like useState() and useEffect() like componentDidMount()

    const[state,setState]=useState({images:[]});
    useEffect(()=>{
        axios.get('js/data.json').then(response=>{setState({images:response.data.portfolio,})})
    },[]);

    const gallary=state.images.map((imageItem)=>{
        return (
            <GallaryItem key={imageItem.id}>
                <GallaryItemImage src={imageItem.image} alt="" />
                <Overllay>
                    <OverllaySpan >Show Image</OverllaySpan>
                </Overllay>
            </GallaryItem>
        );
    })
        return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                {gallary}
               
            </div>
        </PortfolioSection>
    );
}
 export default Portfolio;