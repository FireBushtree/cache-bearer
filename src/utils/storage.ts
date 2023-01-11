export type StorageKey = keyof typeof storage

const CACHE_PREFIX = 'cache-bearer'
const genKey = (key: string): string => `${CACHE_PREFIX}-${key}`
const COOKIE_KEY = genKey('cookie')

export const storage = {
  async getter (key: string) {
    const obj = await window.chrome.storage.local.get(key)
    return obj ? obj[key] : null
  },

  setter (key: string, val: string) {
    window.chrome.storage.local.set({ [key]: val })
  },

  setCookie (val: string) {
    return storage.setter(COOKIE_KEY, val)
  },

  async getCookie () {
    return await storage.getter(COOKIE_KEY)
  }
}
