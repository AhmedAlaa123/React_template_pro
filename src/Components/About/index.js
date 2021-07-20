import React  from 'react';
import { AboutSection,AboutInfo,InfoTitle,InfoDir,InfoDescription,Anchor } from './style';
const About =(props)=>{
    return (
        <AboutSection>
        <div className="container">
            <AboutInfo>
                <InfoTitle><span>This is</span> Me</InfoTitle>
                <InfoDir>Creative Director</InfoDir>
                <InfoDescription>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDescription>
                <InfoDescription>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDescription>
            </AboutInfo>
        </div>
    </AboutSection>
    );
}
 export default About;