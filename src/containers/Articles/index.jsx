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
    if (isSignedIn && typeof articles === 'string') {
      const aesPassword = decryptRSA(privateKey, serverSecret)
      const decryptedArticles = decryptAES(aesPassword, articles)
      const formattedArticles = JSON.parse(decryptedArticles)

      const checksum = verifyIntegrity(JSON.stringify(formattedArticles.data))

      if (checksum === formattedArticles.checksum) {
        toast.success('Authenticated!')
        toast.success('Healthy!')
      }

      return formattedArticles.data
    }

    return articles.data
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
