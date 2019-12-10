import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { generateRSAPairKeys, decryptRSA } from '../../../core/utils/security'
import { actions } from '../store/actions'
import { Container, Title, SignInContainer } from './styled'
const crypto = require('crypto')


const Header = (props) => {
  const {
    setPrivateKey,
    setPublicKey,
    signIn,
    serverPublicKey,
    serverSecret,
    publicKey,
    privateKey,
    privateBuffer,
    publicBuffer,
    setPrivateBuffer,
    setPublicBuffer,
  } = props

  const setKeyPair = (keys) => {
    setPrivateKey(keys.privateKeyPEM)
    setPublicKey(keys.publicKeyPEM)
    setPrivateBuffer(keys.privateBuffer)
    setPublicBuffer(keys.publicBuffer)

    signIn(keys.publicKeyPEM)
  }

  const handleSignIn = async () => {
    window.ENVIRONMENT.contentType = 'text/plain'
    await generateRSAPairKeys(setKeyPair)
  }

  return (
    <Container>
      <Title>  GBC083 </Title>
      <SignInContainer onClick={handleSignIn}>
        Sign In
      </SignInContainer>
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
}

const mapProps = ({ main }) => main

export default connect(mapProps, mapActions)(Header)
