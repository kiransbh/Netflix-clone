import React from 'react'
import styled from 'styled-components'
import LeftLogo from './LeftLogo'
import CheckCircleIcon from '@material-ui/icons/CheckCircleOutlined'
import DoneIcon from '@material-ui/icons/Done';
import { Link } from 'react-router-dom'



function SignInPage2(){
  return (
    <Container>
        <LeftLogo />
        <Link to="/">
          <SignOutBtn>
            <button>Sign Out</button>
          </SignOutBtn>
        </Link>

        <Wrapper>
            <Header>
              <Icon>
                <CheckCircleIcon style={{color:'#db0000', width:'42px', height:'42px'}} />
              </Icon>
              <p>STEP <strong>2</strong> OF <strong>3</strong></p>
              <h1>Choose your plan.</h1>
            </Header>
            <Content>
                <Wrap><DoneIcon style={{color:'#db0000'}} /><p>No commitments, cancel anytime.</p></Wrap>
                <Wrap><DoneIcon style={{color:'#db0000'}} /><p>Everything on Netflix for one low price.</p></Wrap>
                <Wrap><DoneIcon style={{color:'#db0000'}} /><p>No ads and no extra fees. Ever.</p></Wrap>
            </Content>
            <Link to="/SignInPage3">
              <Button>
                <button>Next</button>
              </Button>
            </Link>
        </Wrapper>
    </Container>
  )
}
export default SignInPage2

const Container = styled.div`
    position:relative;
    width:100vw;
    height:100vh;
    background-color:white;
    overflow-x:hidden;

    @media (max-width:768px){
      width:104vw;
    }
`
const SignOutBtn = styled.div`
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
  width:360px;
  height:420px;
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
const Icon =styled.div``

const Content = styled.div`
  p{
      font-size:1.1em;
  }
`
const Wrap = styled.div`
  display:flex;
  justify-content:start;
  align-items:center;
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
  }
`