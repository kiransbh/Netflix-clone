import React from 'react'
import styled from 'styled-components'
import LeftLogo from './LeftLogo'
import { Link } from 'react-router-dom'


function SignInPage1() {
  return (
    <Container>
      <LeftLogo />
      <Link to="/MainSignIn">
        <SigninBtn>
          <button>Sign In</button>
        </SigninBtn>
      </Link>
      <Wrapper>
        <Header>
          <p><p>STEP <strong>1</strong> OF <strong>3</strong></p></p>
          <h1>Welcome back! Joining Netflix is easy.</h1>
        </Header>
        <InputGuide><p>Enter your password and you'll be watching in no time.</p></InputGuide>

        <Input><input type='password' placeholder='Enter your password' required /></Input>

        <Forget><p>Forget your password?</p></Forget>

        <Link to="/SignInPage2">
          <Button>
            <button>Next</button>
          </Button>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default SignInPage1

const Container = styled.div`
    position:relative;
    width:100vw;
    height:100vh;
    background-color:white;
    overflow-x:hidden;

    @media (max-width:768px){
      width:104vw;
      font-size:1em;
    }
`

const SigninBtn = styled.div`
  position:absolute;
  top:36px;
  right:20px;

  button{
    font-size:1em;
    color:black;
    font-weight:bold;
    background:none;
    padding:8px 16px;
    border:none;
    outline:none;
    border-radius:4px;
    background-color:transparent;
    cursor:pointer;
  }
`
const Wrapper = styled.div`
  width:420px;
  height:480px;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
`
const Header = styled.div`
  h1{
    width:300px;
  }
`
const InputGuide = styled.div`
  p{
    font-size:1.1em;
    width:300px;
  }
`

const Input = styled.div`
  input{
    width:96%;
    height:36px;
    border:none;
    outline:none;
    background:transparent;
    border:1px solid #7d7d7d;
    padding-left:12px;
    font-size:1.1em;

    @media (max-width:768px){
      width:88%;
    }
  }
`

const Forget = styled.div`
  p{
    font-size:1.1em;
    color:#0080ff;
    cursor:pointer;
  }
`

const Button = styled.div`
  button{
    width:100%;
    height:48px;
    border:none;
    outline:none;
    background-color:#db0000;
    font-size:1.4em;
    color:white;
    cursor:pointer;
    @media (max-width:768px){
      width:92%;
    }
  }
`