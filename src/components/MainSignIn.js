import React from 'react'
import styled from 'styled-components'
import LeftLogo from './LeftLogo'


function MainSignIn() {
  return (
    <Container>
        <LeftLogo />
        <InputWrapper>
            <h1>Sign In</h1>

            <InputField>
                <input type='email' placeholder='Email or phone number' />
                <input type='password' placeholder='Password' />
                <button>Sign In</button>
            </InputField>
            <HelpWrapper>
                <Remember>
                    <input type='checkbox' name='remember' />
                    <label for='remember'>Remember me</label>
                </Remember>

                <p>Need help?</p>
            </HelpWrapper>
            <New>
                <p>New to Netflix?</p>
                <span>Sign up now</span>
            </New>
            <Captcha>
                <p>This page is protected by Google reCAPTCHA to ensure your're not a bot.</p>
            </Captcha>
            </InputWrapper>
    </Container>
  )
}

export default MainSignIn

const Container = styled.div`
    position:relative;
    width:100vw;
    height:100vh;
    background-color:black;
    overflow-x:hidden;
`
const InputWrapper = styled.div`
    width:380px;
    height:420px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);

    h1{
        color:white;
    }
`
const InputField = styled.div`
    input{
        width:360px;
        height:42px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:start;
        margin-bottom:20px;
        font-size:1em;
        color:#fff;
        background-color:#564d4d;
        border:none;
        outline:none;
        padding-left:12px;
        border-radius:4px;

        ::placeholder{
            color:white;
            opacity:0.75;
        }
    }

    button{
        width:374px;
        height:42px;
        margin-top:30px;
        font-size:1em;
        color:#fff;
        background-color:#db0000;
        border:none;
        outline:none;
        border-radius:4px;
        cursor:pointer;
    }
`
const HelpWrapper = styled.div`
    width:374px;
    position:relative;
    color:white;
    display:flex;
    align-items:center;
    justify-content:space-between;

    input{
        width:20px;
        height:20px;
    }
`
const Remember = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const New = styled.div`
    display:flex;
    align-items:center;
    justify-content:start;

    p{
        color:#564d4d;
    }

    span{
        color:white;
    }
`

const Captcha = styled.div`
    color:white;
`