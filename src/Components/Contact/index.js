import React  from 'react';
import {ContactSection,ContactTitle,Form,FormInputContainer,InputText,InputEmail,Submit,TextArea,Span, InputSub} from './style.js'
const Contact =(props)=>{
    return (
        <ContactSection>
            <div className="container">
                <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                <Form action="">
                    <FormInputContainer>
                        <InputText type="text" placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email" />
                    </FormInputContainer>
                    <InputSub type="text" placeholder="Your Subject" />
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <Submit type="submit" value="Send Message" />
                </Form>
            </div>
        </ContactSection>
    );
}
 export default Contact;