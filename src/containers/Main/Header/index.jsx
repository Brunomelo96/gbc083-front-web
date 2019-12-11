/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import { generateRSAPairKeys } from '../../../core/utils/security'
import { actions } from '../store/actions'
import { Container, Title, SignInContainer } from './styled'


const Header = (props) => {
  const {
    setPrivateKey,
    setPublicKey,
    signIn,
    setPrivateBuffer,
    setPublicBuffer,
    isSignedIn,
    signOut,
  } = props

  const setKeyPair = (keys) => {
    setPrivateKey(keys.privateKeyPEM)
    setPublicKey(keys.publicKeyPEM)
    setPrivateBuffer(keys.privateBuffer)
    setPublicBuffer(keys.publicBuffer)

    signIn(keys.publicKeyPEM)
  }

  const handleSignIn = async () => {
    await generateRSAPairKeys(setKeyPair)
    window.ENVIRONMENT.contentType = 'text/plain'
  }

  const handleSignOut = () => {
    signOut()
    window.ENVIRONMENT.contentType = 'application/json'
  }

  return (
    <Container>
      <Title>  GBC083 </Title>
      {
        !isSignedIn
          ? (
            <SignInContainer onClick={handleSignIn}>
              Sign In
            </SignInContainer>
          )
          : (
            <SignInContainer onClick={handleSignOut}>
              Sign Out
            </SignInContainer>
          )
      }
    </Container>
  )
}

Header.defaultProps = {
}

Header.propTypes = {
}

const mapActions = {
  setPrivateKey: actions.setPrivateKey,
  setPublicKey: actions.setPublicKey,
  signIn: actions.signIn,
  setPrivateBuffer: actions.setPrivateBuffer,
  setPublicBuffer: actions.setPublicBuffer,
  signOut: actions.signOut,
}

const mapProps = ({ main }) => main

export default connect(mapProps, mapActions)(Header)
