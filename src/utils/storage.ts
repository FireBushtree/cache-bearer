export type StorageKey = keyof typeof storage

const setStorage = window.localStorage.setItem
const getStorage = window.localStorage.getItem
const CACHE_PREFIX = 'cache-bearer'
const genKey = (key: string): string => `${CACHE_PREFIX}-${key}`
const COOKIE_KEY = genKey('cookie')

export const storage = {
  setCookie (val: string) {
    setStorage(COOKIE_KEY, val)
  },

  getCookie () {
    return getStorage(COOKIE_KEY)
  }
}
