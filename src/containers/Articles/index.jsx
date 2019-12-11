/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actions } from './store/actions'
import {
  decryptAES,
  decryptRSA
} from '../../core/utils/security'
import ArticlesList from '../../components/ArticlesList'
import Loading from '../../components/Loading'

const Articles = (props) => {
  const {
    articles,
    readAll,
    isSignedIn,
    serverSecret,
    privateKey,
    isLoading,
  } = props

  useEffect(() => {
    readAll()
  }, [isSignedIn])

  const formatArticles = () => {
    if (isSignedIn && typeof articles === 'string') {
      const aesPassword = decryptRSA(privateKey, serverSecret)
      const decryptedArticles = decryptAES(aesPassword, articles)
      const formattedArticles = JSON.parse(decryptedArticles)

      return formattedArticles
    }

    return articles
  }

  const formattedArticles = formatArticles()

  return (
    <>
      <ArticlesList
        articles={formattedArticles}
      />
      <Loading isLoading={isLoading} />
    </>
  )
}

const mapActions = {
  readAll: actions.readAll,
}

const mapProps = ({ articles, main }) => ({ ...main, ...articles })

export default connect(mapProps, mapActions)(Articles)
