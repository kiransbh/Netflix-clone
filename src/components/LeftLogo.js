import React from 'react';
import styled from 'styled-components';
import LogoImg from '../images/Logo.png';

function LeftLogo() {
  return (
    <Logo>
      <img src={ LogoImg } alt='Logo'></img>
    </Logo>
  )
}

export default LeftLogo

const Logo = styled.div`
    position:relative;
    top:15px;
    left:12px;
    cursor:pointer;
    
    img{
      width:120px;
      height:70px;
      position:absolute;
    }
`