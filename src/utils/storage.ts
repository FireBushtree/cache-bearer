const setStorage = window.localStorage.setItem
const CACHE_PREFIX = 'cache-bearer'
const genKey = (key: string): string => `${CACHE_PREFIX}-${key}`

export const storage = {
  copyCookie (val: string) {
    setStorage(genKey('cookie'), val)
  }
}
