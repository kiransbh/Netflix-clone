import React from 'react'
import styled from 'styled-components'
import Tv from '../images/tv.png';
import Video from '../images/video-1.mp4'


function LandingPageSection2() {
  return (
    <Container>
        <Header>
            <h1>Enjoy on your TV.</h1>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </Header>
        <video src={Video} autoplay="true" loop="true" muted="true" style={{width:'480px',height:'480px'}}></video>
        <TvWrapper>
            <img src={ Tv } alt='Tv'></img>
        </TvWrapper>
    </Container>
  )
}

export default LandingPageSection2

const Container = styled.div`
    width:100vw;
    height:100vh;
    position:relative;
    background-color:#000;
    overflow-x:hidden;

    video{
        position:absolute; 
        top:28%;
        left:33%;

        @media (max-width:768px){
            left:-15%;
        }
    }
`

const TvWrapper = styled.div`
    position:absolute;
    top:60%;
    left:50%;
    transform:translate(-50%,-50%);
    overflow:hidden;

    img{
        width:540px;
        height:420px;
    }

    @media (max-width:768px){
        img{
            width:420px;
            height:360px;
        }
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
        p{
            width:300px;
        }
    }
` 