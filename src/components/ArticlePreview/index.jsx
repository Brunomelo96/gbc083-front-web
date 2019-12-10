/* eslint-disable react/prop-types */
import React from 'react'
import {
  PostContainer,
  TextContainer,
  TitleContainer,
  AuthorContainer,
  ContentContainer
} from './styled'

export const ArticlePreview = (props) => {
  const { article } = props
  const {
    name, author, description,
  } = article

  return (
    <PostContainer>
      <TextContainer>
        <TitleContainer>
          {name}
        </TitleContainer>
        <AuthorContainer>
          {'by: '}
          {author}
        </AuthorContainer>
        <ContentContainer>{description}</ContentContainer>
      </TextContainer>
    </PostContainer>
  )
}

export default ArticlePreview
