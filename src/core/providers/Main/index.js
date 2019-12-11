import Api from '../api'

const signIn = '/signin'
const signOutURL = '/signout'

const Articles = {
  signIn(params) {
    return Api.request(signIn, { data: params, method: 'POST' })
  },
  signOut() {
    return Api.request(signOutURL, { method: 'POST' })
  },
}

export default Articles
