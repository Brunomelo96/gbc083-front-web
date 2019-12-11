/* eslint-disable react/prop-types */
/* eslint-disable no-tabs */
import React from 'react'
import map from 'lodash/map'
import ArticlePreview from '../ArticlePreview'
import {
  ListContainer
} from './styled'

const ArticlesList = (props) => {
  const { articles } = props

  return (
    <ListContainer>
      {
				map(articles, (article) => (
  <ArticlePreview
    article={article}
  />
				))
			}
    </ListContainer>
  )
}

export default ArticlesList
