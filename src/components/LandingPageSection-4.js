import React from 'react'
import styled from 'styled-components'
import WatchImg from '../images/device-pile-in.png'


function LandingPageSection4() {
  return (
    <Conatiner>
        <Header>
            <h1>Watch everywhere.</h1>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </Header>
        <WatchWrapper>
            <img src={ WatchImg } alt='watchImage' ></img>
        </WatchWrapper>
    </Conatiner>
  )
}

export default LandingPageSection4

const Conatiner = styled.div`
    width:100vw;
    height:100vh;
    position:relative;
    background-color:#000;
`
const WatchWrapper = styled.div`
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
        width:300px;
    }
`