import React, { useState } from 'react'
import styled from 'styled-components'
import '../index.css'
import Accordian from './Accordian'

function LandingPageSection7() {

  const [active, setActive] = useState("");

  return (
    <Container>
        <Header>
            <h1>Frequently Asked Questions</h1>
        </Header>
        <Accordian 
          title="What is Netflix?"
          detials="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentations and more - on thousands of internet-connected devices."
          active={active}
          setActive={setActive}
          />
        <Accordian 
          title="How much does Netflix cost?"
          detials=" Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 149 to 649 a month. No extra costs, no contracts."
          active={active}
          setActive={setActive}
          />
        <Accordian
          title="Where can I watch?"
          detials="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablet, streaming media players and game consoles."
          active={active}
          setActive={setActive}
          />
        <Accordian
          title="How do I cancel?"
          detials="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks.There are no cancellation fees - start or stop your account anytime."
          active={active}
          setActive={setActive}
          />
        <Accordian
          title="What can I watch on Netflix?"
          detials="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks.There are no cancellation fees - start or stop your account anytime."
          active={active}
          setActive={setActive}
          />
        <Accordian
          title="Is Netflix is good for Kids?"
          detials="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks.There are no cancellation fees - start or stop your account anytime."
          active={active}
          setActive={setActive}
          />
    </Container>
  )

}

export default LandingPageSection7

const Container = styled.div`
    width:100vw;
    height:100vh;
    position:relative;
    background-color:black;
`
const Header = styled.div`
    width:420px;
    position:absolute;
    position:absolute;
    top:15%;
    left:50%;
    transform:translate(-50%,-50%);
    color:#fff;
    text-align:center;
`
