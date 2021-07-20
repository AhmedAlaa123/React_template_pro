import React,{Component}  from 'react';
import axios from 'axios';
import {SocialMediaSection,SocialBox,SocialIcon,Paragraph,Span,SpanInfo} from'./style.js'
class SocialMedia extends Component{

    state={
        social:[]
    }
    componentDidMount(){
        axios.get('js/data.json').then((result) => {
            this.setState({social:result.data.social})
        }).catch((err) => {
            console.log(err)
        });
    }
    render(){
        const {social}=this.state;
        const scialItems=social.map(socialItem=>{
            return (
                <SocialBox id={socialItem.id} key={socialItem.id}>
                    <SocialIcon className={socialItem.icon}></SocialIcon>
                    <Paragraph>
                    <Span >{socialItem.title}</Span>
                    <SpanInfo>{socialItem.body}</SpanInfo>
                    </Paragraph>
                </SocialBox>
            );
        })
        return (
            
            <SocialMediaSection>
                
               
                {scialItems}
               
            </SocialMediaSection>
        );
    } 
}
 export default SocialMedia;