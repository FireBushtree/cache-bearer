import { CacheName, COOKIE_NAME, LOCAL_STORAGE_NAME, SESSION_STORAGE_NAME } from '../constants'
import { Message } from '../content-scripts'
import { CacheKey, MessageType } from '../content-scripts/cache'
import { storage, StorageKey } from './storage'

export interface CreateHelperOptions {
  name: CacheName
  type: CacheKey
  copyFunc: typeof storage[StorageKey]
}

export type CreateHelper = (
  options: CreateHelperOptions
) => () => Promise<void>

const createCopy: CreateHelper = (options: CreateHelperOptions) => {
  const { name, type, copyFunc } = options
  return async function () {
    const message = await sendMessage({ type })
    if (message) {
      // @ts-expect-error
      await copyFunc(message)
      await $message(`copy ${name} success`)
    } else {
      await $message(`current website's ${name} is empty`, 'fail')
    }
  }
}

export interface CreatePasterOptions {
  name: CacheName
  type: CacheKey
  pasteFunc: typeof storage[StorageKey]
}

export type CreatePaster = (
  options: CreatePasterOptions
) => () => Promise<void>

const createPaste: CreatePaster = (options: CreatePasterOptions) => {
  const { name, type, pasteFunc } = options
  return async function () {
    // @ts-expect-error
    const text = await pasteFunc()
    if (text) {
      await sendMessage({ type, text })
      await $message(`paste ${name} success`)
    }
  }
}

export interface CreateClearerOptions {
  name: CacheName
  type: CacheKey
}

export type CreateClearer = (options: CreateClearerOptions) => () => Promise<void>

const createClear: CreateClearer = (options: CreateClearerOptions) => {
  const { name, type } = options
  return async function () {
    await sendMessage({ type })
    await $message(`clear ${name} success`)
  }
}

// cookie
export const copyCookie = createCopy({
  name: COOKIE_NAME,
  type: 'copyCookie',
  copyFunc: storage.setCookie
})

export const pasteCookie = createPaste({
  name: COOKIE_NAME,
  type: 'pasteCookie',
  pasteFunc: storage.getCookie
})

export const clearCookie = createClear({
  name: COOKIE_NAME,
  type: 'clearCookie'
})

// local storage
export const copyLocalStorage = createCopy({
  name: LOCAL_STORAGE_NAME,
  type: 'copyLocalStorage',
  copyFunc: storage.setLocalStorage
})

export const pasteLocalStorage = createPaste({
  name: LOCAL_STORAGE_NAME,
  type: 'pasteLoalStorage',
  pasteFunc: storage.getLocalStorage
})

export const clearLocalStorage = createClear({
  name: LOCAL_STORAGE_NAME,
  type: 'clearLocalStroage'
})

// session storage
export const copySessionStorage = createCopy({
  name: SESSION_STORAGE_NAME,
  type: 'copySessionStorage',
  copyFunc: storage.setSessionStorage
})

export const pasteSessionStorage = createPaste({
  name: SESSION_STORAGE_NAME,
  type: 'pasteSessionStorage',
  pasteFunc: storage.getSessionStorage
})

export const clearSessionStorage = createClear({
  name: SESSION_STORAGE_NAME,
  type: 'clearSessionStorage'
})

export async function sendMessage (message: Message): Promise<any> {
  const queryOptions = { active: true, lastFocusedWindow: true }
  const [tab] = await window.chrome.tabs.query(queryOptions)
  if (!tab) {
    return
  }

  const res = await window.chrome.tabs.sendMessage(tab.id, message)
  return res
}

export async function $message (
  text: string,
  messageType: MessageType = 'success'
): Promise<void> {
  return await sendMessage({ type: 'callMessage', text, messageType })
}
