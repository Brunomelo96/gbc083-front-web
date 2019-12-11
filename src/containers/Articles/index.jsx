/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { actions } from './store/actions'
import {
  decryptAES,
  decryptRSA,
  verifyIntegrity,
  verifyRSA
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
    serverPublicKey,
  } = props

  useEffect(() => {
    readAll()
  }, [isSignedIn])

  const formatArticles = () => {
    if (isSignedIn && typeof articles.data === 'string') {
      const aesPassword = decryptRSA(privateKey, serverSecret)
      const decryptedArticles = decryptAES(aesPassword, articles.data)
      const formattedArticles = JSON.parse(decryptedArticles)

      // const authenticate = verifyRSA(serverPublicKey, articles.checksum)
      const checksum = verifyIntegrity(decryptedArticles)

      if (checksum === articles.checksum) {
        toast.success('Authenticated!')
        toast.success('Healthy!')
      }

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
