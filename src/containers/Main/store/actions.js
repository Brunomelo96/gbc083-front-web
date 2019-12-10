export const types = {
  SET_PRIVATE_KEY: 'MAIN/SET_PRIVATE_KEY',
  SET_PUBLIC_KEY: 'MAIN/SET_PUBLIC_KEY',
  SET_SERVER_PUBLIC_KEY: 'MAIN/SET_SERVER_PUBLIC_KEY',
  SET_SERVER_SECRET: 'MAIN/SET_SERVER_SECRET',
  SIGN_IN: 'MAIN/SIGN_INT',
  SET_LOADING: 'MAIN/SET_LOADING',
  SET_PUBLIC_BUFFER: 'MAIN/SET_PUBLIC_BUFFER',
  SET_PRIVATE_BUFFER: 'MAIN/SET_PRIVATE_BUFFER',
  SET_SIGNED_IN: 'MAIN/SET_SIGNED_IN',
}

export const actions = {
  setPrivateKey: (privateKey) => ({ type: types.SET_PRIVATE_KEY, privateKey }),
  setPublicKey: (publicKey) => ({ type: types.SET_PUBLIC_KEY, publicKey }),
  setServerPublicKey: (serverPublicKey) => ({ type: types.SET_SERVER_PUBLIC_KEY, serverPublicKey }),
  setServerSecret: (serverSecret) => ({ type: types.SET_SERVER_SECRET, serverSecret }),
  signIn: (publicKey) => ({ type: types.SIGN_IN, publicKey }),
  setLoading: (isLoading) => ({ type: types.SET_LOADING, isLoading }),
  setPublicBuffer: (publicBuffer) => ({ type: types.SET_PUBLIC_BUFFER, publicBuffer }),
  setPrivateBuffer: (privateBuffer) => ({ type: types.SET_PRIVATE_BUFFER, privateBuffer }),
  setSignedIn: (isSignedIn) => ({ type: types.SET_SIGNED_IN, isSignedIn }),
}
