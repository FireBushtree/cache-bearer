export type CacheKey = keyof typeof cache

export const cache = {
  copyCookie () {
    return window.document.cookie
  },

  pasteCookie (cookie: string) {
    window.document.cookie = cookie
  }
}
