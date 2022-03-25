import React from 'react'
import styled from 'styled-components'
import Children from '../images/children.png'

function LandingPageSection5() {
  return (
    <Container>
            <Header>
                <h1>Create profiles for children.</h1>
                <p>Send children on adventures with their favourite characters in a space made just for them-free with your membership.</p>
            </Header>
            <ChildrenImg>
                <img src={ Children } alt='childrenImage'></img>
            </ChildrenImg>
    </Container>
  )
}

export default LandingPageSection5

const Container = styled.div`
    position:relative;
    width:100vw;
    height:100vh;
    background-color:#000;
`

const ChildrenImg = styled.div`
    position:absolute;
    top:60%;
    left:50%;
    transform:translate(-50%,-50%);

    img{
        width:540px;
        height:420px;

        @media (max-width:768px){
            width:420px;
            height:300px;
        }
    }
`

const Header = styled.div`
    position:absolute;
    position:absolute;
    top:20%;
    left:50%;
    transform:translate(-50%,-50%);
    color:#fff;
    text-align:center;

    p{
        font-size:1.2em;
    }

    @media (max-width:768px){
        width:360px;
    }
`