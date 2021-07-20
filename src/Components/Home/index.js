import React  from 'react';
import { HomeSection,HomeInformation,HomeTitle,HomeInfo,HomeDescription,Span,HomeButton } from './style';
const Home =(props)=>{
    return (
    
        <HomeSection >
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Hamza Nabil</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDescription>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDescription>
                    <HomeButton>Let's Begin</HomeButton>
                </HomeInformation>
            </div>
        </HomeSection>
    );
}
 export default Home;