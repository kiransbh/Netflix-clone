import React from 'react';
import styled from 'styled-components';
import BgImg from '../images/home-bg.jpg';
import LanguageIcon from '@material-ui/icons/Language'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import  { Link } from 'react-router-dom'
import '../index.css'


function LandingPageSection1(){

  return (
    <Container>
      <Language>
        <button>
          <LanguageIcon />
          <p>English</p> 
          <ArrowDropDownIcon />
        </button>
      </Language>
      <Link to="/MainSignIn">
        <SigninBtn>
          <button>Sign In</button>
        </SigninBtn>
      </Link>
      <Header>
        <h1>Unlimited movies, TV shows and more.</h1>
      </Header>
      <InfoWrapper>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
      </InfoWrapper>
      <InputGroup>
        <input type='email' placeholder='Email address' />
        <Link to="/SignInPage1"><GetButton><button type='submit'>Get Started</button></GetButton></Link>
      </InputGroup>
      <BackgroundImg>
        <img src={ BgImg } alt='BgImage' />
      </BackgroundImg>
    </Container>

  )
}

export default LandingPageSection1

const Container = styled.div`

`

const BackgroundImg = styled.div`
  img{
    width:100vw;
    height:100vh;
    object-fit:cover;

    @media (max-width:768px){
      width:104vw;
    }
  }
`
const Header = styled.div`
  text-align:center;
  position:absolute;
  top:42%;
  left:50%;
  transform:translate(-50%,-50%);

  h1{
    color:#fff;
  }

  @media (max-width:768px){
    h1{
      width:420px;
    }
  }
`

const InfoWrapper = styled(Header)`
  top:54%;

  p{
    font-size:1.2em;
    color:#fff;
  }

  @media (max-width:768px){
    top:60%;
    width:300px;
  }
`

const InputGroup = styled(Header)`
  top:66%;
  display:flex;
  justify-content:center;
  align-items:center;

  input{
    width:540px;
    height:36px;
    padding-left:12px;
    border:none;
    outline:none;
  }

  button{
    font-size:1em;
    color:white;
    background:none;
    padding:10px 24px;
    border:none;
    outline:none;
    background-color:#db0000;
    cursor:pointer;
  }

  @media (max-width:768px){
    top:78%;
    display:flex;
    flex-direction:column;

    input{
      width:360px;
    }

    button{
      padding:10px 20px;
      margin:8px;
    }
  }
`

const SigninBtn = styled.div`
  position:absolute;
  top:36px;
  right:6px;

  button{
    font-size:1em;
    color:white;
    background:none;
    padding:8px 16px;
    border:none;
    outline:none;
    border-radius:4px;
    background-color:#db0000;
    cursor:pointer;
  }
`
const Language = styled.div`
  position:absolute;
  top:36px;
  right:120px;
  @media (max-width:768px){
    right:96px;
  }

  button{
    width:150px;
    height:36px;
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

const GetButton = styled.div``