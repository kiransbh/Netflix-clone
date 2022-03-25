import React from 'react'
import styled from 'styled-components'
import LanguageIcon from '@material-ui/icons/Language'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

function LandingPageSection6() {
  return (
    <Container>
      <FooterWrapper>
          <div className=' a1 '><p>FAQ</p></div>
          <div className=' a2 '><p>Account</p></div>
          <div className=' a3 '><p>Investor Relations</p></div>
          <div className=' a4 '><p>Ways to Watch</p></div>
          <div className=' a5 '><p>Privacy</p></div>
          <div className=' a6 '><p>Corporate Information</p></div>
          <div className=' a7 '><p>Speed Test</p></div>
          <div className=' a8 '><p>Only on Netflix</p></div>
          <div className=' a9 '><p>Help Center</p></div>
          <div className=' a10 '><p>Media Center</p></div>
          <div className=' a11 '><p>Jobs</p></div>
          <div className=' a12 '><p>Terms of Use</p></div>
          <div className=' a13 '><p>Cookie Preferences</p></div>
          <div className=' a14 '><p>Contact Us</p></div>
          <div className=' a15 '><p>Legal Notices</p></div>
      </FooterWrapper>

      <Language>
        <button>
          <LanguageIcon />
          <p>English</p> 
          <ArrowDropDownIcon />
        </button>
      </Language>
    </Container>
  )
}

export default LandingPageSection6

const Container = styled.div`
  position:relative;
  width:100vw;
  height:100vh;
  background-color:#000;
`
const FooterWrapper = styled.div`
  width:80vw;
  height:50vh;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  font-size:1.2em;
  color:white;
  text-align:left;
  display:grid;
  grid-template-columns:25% 25% 25% 25%;
  grid-template-rows:12% 12% 12% 12%;

  @media (max-width:768px){
    font-size:1em;
    top:40%;
    grid-template-columns:50% 50%;
  }
`

const Language = styled.div`
  position:absolute;
  top:80%;
  left:15%;
  transform:translate(-50%,-50%);

  @media (max-width:768px){
    left:22%;
  }

  button{
    width:150px;
    height:48px;
    display:flex;
    justify-content:center;
    align-items:center;
    background:transparent;
    outline:none;
    border:none;
    border:1px solid #fff;
    color:white;
    font-size:1.2em;
    cursor:pointer;

    p{
      padding:4px;
    }

    @media (max-width:768px){
      width:120px;
      font-size:1em;
      padding:4px 20px;
    }
  }
`