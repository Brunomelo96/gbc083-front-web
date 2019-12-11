/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import isEmpty from 'lodash/isEmpty'
import { connect } from 'react-redux'
import {
  verifyIntegrity,
  encryptAES,
  decryptRSA,
  signRSA
} from '../../../core/utils/security'
import {
  Container,
  FormRow,
  Input,
  Label,
  ButtonsContainer,
  ConfirmButton
} from './styled'
import { actions } from '../store/actions'

const CreateArticle = (props) => {
  const {
    isSignedIn,
    createArticle,
    serverSecret,
    privateKey,
  } = props
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')

  const isButtonActive = (!isEmpty(name)) && (!isEmpty(author)) && (!isEmpty(description))

  const onSubmit = () => {
    const article = {
      name,
      description,
      author,
    }

    if (isSignedIn) {
      const aesPassword = decryptRSA(privateKey, serverSecret)
      const toHash = JSON.stringify(article)
      const checksum = verifyIntegrity(toHash)
      const signedChecksum = signRSA(privateKey, checksum)
      const hashArticle = {
        ...article,
        checksum: signedChecksum,
      }

      const encryptedArticle = encryptAES(aesPassword, hashArticle)

      createArticle(encryptedArticle)
    } else {
      createArticle(article)
    }
  }

  const handleSubmit = () => isButtonActive && onSubmit()

  const setFunctions = {
    name: setName,
    author: setAuthor,
    description: setDescription,
  }

  const handleChange = (type, event) => {
    event.preventDefault()
    const value = event.target.value

    setFunctions[type](value)
  }

  return (
    <Container>
      <FormRow>
        <Label>Name:</Label>
        <Input
          value={name}
          onChange={(event) => handleChange('name', event)}
        />
      </FormRow>
      <FormRow>
        <Label>Author:</Label>
        <Input
          value={author}
          onChange={(event) => handleChange('author', event)}
        />
      </FormRow>
      <FormRow>
        <Label>Description:</Label>
        <Input
          value={description}
          onChange={(event) => handleChange('description', event)}
        />
      </FormRow>
      <ButtonsContainer>
        <ConfirmButton
          active={isButtonActive}
          onClick={handleSubmit}
        >
          Confirm
        </ConfirmButton>
      </ButtonsContainer>
    </Container>
  )
}

const mapActions = {
  createArticle: actions.createArticle,
}

const mapProps = ({ articles, main }) => ({ ...articles, ...main })

export default connect(mapProps, mapActions)(CreateArticle)
