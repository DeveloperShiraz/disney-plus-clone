import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src='/images/cta-logo-one.svg' alt=''/>
            <SignUp>
                GET THE DISNEY BUNDLE
            </SignUp>
            <Description>
                Get The Disney Bundle to stream the best movies, shows, and sports with Disney+, Hulu, and ESPN+. Terms Apply. Learn more about The Disney Bundle.
            </Description>
            <CTALogoTwo src='/images/cta-logo-two.png' alt=''/>
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
position: relative;
height: calc(100vh - 70px);
display: flex;
align-items: center;
justify-content: center;

&:before{
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/images/login-background.jpg');
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.6;
    z-index: -1;
}
`;

const CTA = styled.div`
max-width: 650px;
padding: 80px 40px;
width: 70%;
display: flex;
flex-direction: column;
align-items: center;
`;

const CTALogoOne = styled.img``;
const CTALogoTwo = styled.img`
width: 95%;
`;

const SignUp = styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
padding: 17px 0;
color: #f9f9f9;
border-radius: 25px;
text-align: center;
font-size: 18px;
cursor: pointer;
letter-spacing: 1.5px;
margin-top: 10px;
margin-bottom: 12px;
&:hover{
    background-color: #0483ee;
    color: black;
}
`;

const Description = styled.p`
font-size: 16px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
`;