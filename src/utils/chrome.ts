import { Message } from '../content-scripts'
import { CacheKey, MessageType } from '../content-scripts/cache'
import { storage, StorageKey } from './storage'

export interface CreateHelperOptions {
  name: string
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

export const copyCookie = createCopy({
  name: 'cookie',
  type: 'copyCookie',
  copyFunc: storage.getCookie
})

export const copyLocalStorage = createCopy({
  name: 'local storage',
  type: 'copyLocalStorage',
  copyFunc: storage.getLocalStorage
})

export const pasteCookie = async (): Promise<void> => {
  const cookie = await storage.getCookie()
  if (cookie) {
    await sendMessage({ type: 'pasteCookie', text: cookie })
    await $message('paste cookie success')
  }
}

export const clearCookie = async (): Promise<void> => {
  await sendMessage({ type: 'clearCookie' })
  await $message('clear cookie success')
}

export const pasteLocalStorage = async (): Promise<void> => {
  const lStorage = await storage.getLocalStorage()
  if (lStorage) {
    await sendMessage({ type: 'pasteLoalStorage', text: lStorage })
    await $message('paste local storage success')
  }
}

export const clearLocalStorage = async (): Promise<void> => {
  await sendMessage({ type: 'clearLocalStroage' })
  await $message('clear local storage success')
}

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
