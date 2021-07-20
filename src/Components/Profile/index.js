import axios from 'axios';
import React ,{useState,useEffect} from 'react';
import {ProfileSection,ProfileBox,ProfileList,ProfileItem,Span,SpanWeb,Skills,SkillDescription,Bar,BarTitle,Percentage,Parent,LinePercentage,ProfileTitle, ProfileTitleSpan, SkillTitleSpan, Skillstitle}from './style.js'
const Profile =(props)=>{
    const [state,setState]=useState({profiles:[]});
    useEffect(()=>{
        axios.get('js/data.json').then(response=>{
            setState({profiles:response.data.profiles});
        })
    },[]
    )
    const skills=state.profiles.map(skill=>{
        return (
            <Bar key={skill.id}>
                <BarTitle>{skill.title}</BarTitle>
                <Percentage>{skill.percent}</Percentage>
                <Parent>
                    <LinePercentage percent={skill.percent}></LinePercentage>
                </Parent>
        </Bar>
        );

    })
    return (
        <ProfileSection>
            <div className="container">
                <ProfileBox>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                           Ahmed Alaa
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            28/2/1998
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Sohage
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            ahmed@ahmed.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileBox>
                
                <Skills>
                    <Skillstitle>Some <SkillTitleSpan>skills</SkillTitleSpan></Skillstitle>
                    <SkillDescription>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillDescription>
                   
                    {skills}
                    
                </Skills>
                
            </div>
        </ProfileSection>
    );
}
 export default Profile;