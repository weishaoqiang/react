export function setToken(token) {
  try {
    setStorage(localStorage, 'TT-token', token)
  } catch(err) {
    console.error(err)
  }
}

export function getToken() {
  try {
    return getStorage(localStorage, 'TT-token')
  } catch(err) {
    console.error(err)
  }
}

export function setStorage(storageType, key, value) {
  try {
    storageType.setItem(key, value)
  } catch (err) {
    console.error(err)
  }
}

export function getStorage(storageType, key) {
  try {
    return storageType.getItem(key)
  } catch (err) {
    console.error(err)
  }
}