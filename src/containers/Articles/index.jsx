import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actions } from './store/actions'
import { decryptAES, decryptRSA } from '../../core/utils/security'
import ArticlesList from '../../components/ArticlesList'

const Articles = (props) => {
  const {
    articles,
    readAll,
    isSignedIn,
    serverSecret,
    privateKey,
  } = props

  useEffect(() => {
    readAll()
  }, [isSignedIn])

  const formatArticles = () => {
    if (isSignedIn) {
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
    </>
  )
}

Articles.defaultProps = {
}

Articles.propTypes = {
}

const mapActions = {
  readAll: actions.readAll,
}

const mapProps = ({ articles, main }) => ({ ...articles, ...main })

export default connect(mapProps, mapActions)(Articles)
