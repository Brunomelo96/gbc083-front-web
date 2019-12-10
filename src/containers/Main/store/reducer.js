import createReducer from '../../../core/utils/redux'
import { types as MainTypes } from './actions'

const init = {
  privateKey: '',
  publicKey: '',
  serverPublicKey: '',
  serverSecret: '',
  isLoading: false,
  publicBuffer: new ArrayBuffer(8),
  privateBuffer: new ArrayBuffer(8),
  isSignedIn: false,
}

const reducer = {
  [MainTypes.SET_PRIVATE_KEY](state, { privateKey }) {
    return { ...state, privateKey }
  },
  [MainTypes.SET_PUBLIC_KEY](state, { publicKey }) {
    return { ...state, publicKey }
  },
  [MainTypes.SET_SERVER_PUBLIC_KEY](state, { serverPublicKey }) {
    return { ...state, serverPublicKey }
  },
  [MainTypes.SET_SERVER_SECRET](state, { serverSecret }) {
    return { ...state, serverSecret }
  },
  [MainTypes.SET_LOADING](state, { isLoading }) {
    return { ...state, isLoading }
  },
  [MainTypes.SET_PRIVATE_BUFFER](state, { privateBuffer }) {
    return { ...state, privateBuffer }
  },
  [MainTypes.SET_PUBLIC_BUFFER](state, { publicBuffer }) {
    return { ...state, publicBuffer }
  },
  [MainTypes.SET_SIGNED_IN](state, { isSignedIn }) {
    return { ...state, isSignedIn }
  },
}

export default createReducer(init, reducer)
