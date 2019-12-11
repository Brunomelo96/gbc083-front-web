/* eslint-disable no-param-reassign */
const crypto = require('crypto')

export const ab2str = (buf) => String.fromCharCode.apply(null, new Uint8Array(buf))

export const toPem = (exported, type) => {
  const exportedAsString = ab2str(exported)
  const exportedAsBase64 = window.btoa(exportedAsString)
  const pemExported = `-----BEGIN ${type} KEY-----\n${exportedAsBase64}\n-----END ${type} KEY-----`

  return pemExported
}

export const generateRSAPairKeys = (callback) => {
  const alg = {
    name: 'RSA-PSS',
    modulusLength: 2048,
    publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
    hash: { name: 'SHA-256' },
  }

  const exportType = true

  const scope = ['sign', 'verify']

  window.crypto.subtle.generateKey(alg, exportType, scope
  ).then((keys) => {
    Promise.all([
      window.crypto.subtle.exportKey('spki', keys.publicKey),
      window.crypto.subtle.exportKey('pkcs8', keys.privateKey),
    ]).then((keyPair) => {
      const publicKeyPEM = toPem(keyPair[0], 'PUBLIC')
      const privateKeyPEM = toPem(keyPair[1], 'PRIVATE')

      const publicBuffer = keyPair[0]
      const privateBuffer = keyPair[1]

      return {
        publicKeyPEM,
        privateKeyPEM,
        publicBuffer,
        privateBuffer,
      }
    }).then((formattedKeys) => callback(formattedKeys))
  })
}

export const encryptRSA = (publicKey, toEncrypt) => {
  const buffer = Buffer.from(toEncrypt, 'utf8')
  const encrypted = crypto.publicEncrypt(publicKey, buffer)

  return encrypted.toString('base64')
}

export const decryptRSA = (privateKey, toDecrypt) => {
  const buffer = Buffer.from(toDecrypt, 'base64')
  const decrypted = crypto.privateDecrypt({
    key: privateKey,
    passphrase: '',
  },
  buffer,
  )

  return decrypted.toString('utf8')
}

export const signRSA = (privateKey, toSign) => {
  const buffer = Buffer.from(toSign, 'utf8')
  const signed = crypto.privateEncrypt(privateKey, buffer)

  return signed.toString('base64')
}

export const verifyRSA = (publicKey, toVerify) => {
  const buffer = Buffer.from(toVerify, 'base64')
  const decrypted = crypto.publicDecrypt({
    key: publicKey,
    passphrase: '',
  },
  buffer,
  )

  return decrypted.toString('uft8')
}

export const encryptAES = (password, toEncrypt) => {
  const cipher = crypto.createCipher('aes-256-cbc', password)
  let encrypted = cipher.update(JSON.stringify(toEncrypt), 'utf8', 'hex')
  encrypted += cipher.final('hex')

  return encrypted
}

export const decryptAES = (password, toDecrypt) => {
  const decipher = crypto.createDecipher('aes-256-cbc', password)
  let decrypted = decipher.update(toDecrypt, 'hex', 'utf8')
  decrypted += decipher.final('utf8')

  return decrypted
}

export const verifyIntegrity = (toHash) => {
  const hash = crypto.createHash('sha1').update(toHash).digest('hex')

  return hash
}
