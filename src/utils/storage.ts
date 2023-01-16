export type StorageKey = keyof typeof storage

const CACHE_PREFIX = 'cache-bearer'
const genKey = (key: string): string => `${CACHE_PREFIX}-${key}`
const COOKIE_KEY = genKey('cookie')
const LOCAL_STORAGE_KEY = genKey('local-storage')
const SESSION_STORAGE_KEY = genKey('session-storage')

export const storage = {
  async getter (key: string) {
    const obj = await window.chrome.storage.local.get(key)
    return obj ? obj[key] : null
  },

  setter (key: string, val: any) {
    window.chrome.storage.local.set({ [key]: val })
  },

  setCookie (val: string) {
    return storage.setter(COOKIE_KEY, val)
  },

  async getCookie () {
    return await storage.getter(COOKIE_KEY)
  },

  setLocalStorage (val: Object) {
    return storage.setter(LOCAL_STORAGE_KEY, val)
  },

  async getLocalStorage () {
    return await storage.getter(LOCAL_STORAGE_KEY)
  },

  setSessionStorage (val: Object) {
    return storage.setter(SESSION_STORAGE_KEY, val)
  },

  async getSessionStorage () {
    return await storage.getter(SESSION_STORAGE_KEY)
  }
}
