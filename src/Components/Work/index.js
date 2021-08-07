import axios from 'axios';
import React ,{Component}  from 'react';
import {WorkSection,WorkTitle,WorkPart,WorkIcon,PartTitle,Line,PartDescription, Span } from'./style.js'; 
import MAIN_PATH from '../../contsants/utilites'
class Work extends Component {
    state ={
        works:[]
    }

    // 1============= making http request using fetch method
     /*   async  componentDidMount ()  {
            let response=await fetch('js/data.json');
            if(response.status===200)
            {
                let data =await response.json();
                this.setState({works:data.works});
            }
        }
    */    
    // 2=========== making http  request using axios libirary
    componentDidMount(){
        axios.get('js/data.json').then(res=>{
            // checking about request status
            if(res.status===200)
            {
                // setting data
                this.setState({
                    works:res.data.works
                })
            }
            else {
                // printing status text
                console.log(res.statusText)
            }
        })
    }
    render (){
        const {works}=this.state;
        const worksList=works.map((work) =>{
                   return (
                    <WorkPart first={work.id} key={work.id}>
                        <WorkIcon  className={work.icon_name}></WorkIcon>
                        <PartTitle>{work.title}</PartTitle>
                        <Line/>
                        <PartDescription>
                            {work.body}
                        </PartDescription>
                    </WorkPart>
                   );
        })
        return (
            <WorkSection id='work'>
                <div className="container">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>
                    {worksList}
                </div>
            </WorkSection>
        );
    }
    
}
 export default Work;