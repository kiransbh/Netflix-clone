import React, { useState } from 'react'
import styled from 'styled-components'
import LeftLogo from './LeftLogo'
import DoneIcon from '@material-ui/icons/Done';
import Price from './Price'
import { Link } from 'react-router-dom'

function SignInPage3() {

  const [active, setActive] = useState();

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
                  <p>STEP <strong>2</strong> OF <strong>3</strong></p>
                  <h1>Choose the plan that's right for you</h1>
                </Header>
                <Content>
                    <Wrap><DoneIcon style={{color:'#db0000'}} /><p>Watch all you want. Ad-free.</p></Wrap>
                    <Wrap><DoneIcon style={{color:'#db0000'}} /><p>Recommendations just for you.</p></Wrap>
                    <Wrap><DoneIcon style={{color:'#db0000'}} /><p>Change or cancel your plan anytime.</p></Wrap>
                </Content>

                <Price
                  catagory = "Mobile"
                  price = "149"
                  quality = "Good"
                  resolution = "480p" 
                  active={active}
                  setActive={setActive}
                />
                <Price 
                  catagory = "Basic"
                  price = "199"
                  quality = "Good"
                  resolution = "480p" 
                  active={active}
                  setActive={setActive}
                />
                <Price 
                  catagory = "Standard"
                  price = "499"
                  quality = "Better"
                  resolution = "1080p"
                  active={active}
                  setActive={setActive}
                />
                <Price 
                  catagory = "Premium"
                  price = "649"
                  quality = "Best"
                  resolution = "4k+HDR"
                  active={active}
                  setActive={setActive}
                />

                <Terms>
                    <p>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is avialable in all resolutions. See our Terms of Use for more detials.</p>
                    <p>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium,  2 with Standard, and 1 with basic and Mobile.</p>
                </Terms>
            </Wrapper>

            <Link to="/Homepage">
              <Button>
                <button>Next</button>
              </Button>
            </Link>
        </Container>
  )
}

export default SignInPage3

const Container = styled.div`
    width:100vw;
    height:160vh;
    position:relative;
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
  width:800px;
  position:relative;
  top:36%;
  left:34.5%;
  transform:translate(-50%,-50%);
  @media (max-width:768px){
    width:360px;
    height:420px;
    top:30%;
    left:50%;
  }
`
const Header = styled.div`
    h1{
        width:480px;
      }
    @media (max-width:768px){
      h1{
        width:360px;
      }
    }
`
const Content = styled.div`
      font-size:1.1em;

      @media (max-width:768px){
        p{   
            margin:2%;
      }
`
const Wrap = styled.div`
  display:flex;
  justify-content:start;
  align-items:center;
`
const Terms = styled.div`
      position:absolute;
      top:108%;
  p{
      color:black;
  }

  @media (max-width:768px){
    top:150%;
    p{ 
        width:360px;
    }
  }
`

const Button = styled.div`
  button{
    width:50%;
    height:48px;
    border:none;
    outline:none;
    background-color:#db0000;
    font-size:1.4em;
    color:white;
    cursor:pointer;
    position:absolute;
    top:88%;
    left:50%;
    transform:translate(-50%,-50%);

    @media (max-width:768px){
      top:94%
    }
  }
`