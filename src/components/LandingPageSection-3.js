import React from 'react'
import styled from 'styled-components'
import Mobile from '../images/mobile-0819.jpg'

function LandingPageSection3() {
  return (
    <Container>
        <MobileImg>
            <img src={ Mobile } alt='Mobile-image'></img>
        </MobileImg>
        <Header>
            <h1>Download your shows to watch offline.</h1>
            <p>Save your favorites easily and always have something to watch.</p>
        </Header>
    </Container>
  )
}

export default LandingPageSection3

const Container = styled.div`
    width:100vw;
    height:100vh;
    position:relative;
    background-color:#000;
`

const MobileImg = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    overflow:hidden;

    img{
        width:540px;
        height:420px;
    }

    @media (max-width:768px){
        top:54%;
        left:36%;
        transform:translate(-50%,-50%);
        width:420px;
        height:360px;
    }

    @media (max-width:425px){
        left:36%;
    }
`

const Header = styled.div`
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
        h1,
        p{
            width:300px
        }
    }
`