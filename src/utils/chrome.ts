import { Message } from '../content-scripts'
import { MessageType } from '../content-scripts/cache'
import { storage } from './storage'

export const copyCookie = async (): Promise<void> => {
  const message = await sendMessage({ type: 'copyCookie' })
  if (message) {
    storage.setCookie(message)
    await $message('copy cookie success')
  } else {
    await $message('current website\'s cookie is empty', 'fail')
  }
}

export const pasteCookie = async (): Promise<void> => {
  const cookie = await storage.getCookie()
  if (cookie) {
    await sendMessage({ type: 'pasteCookie', text: cookie })
    await $message('paste cookie success')
  }
}

export const clearCookie = async (): Promise<any> => {
  await sendMessage({ type: 'clearCookie' })
  await $message('clear cookie success')
}

export async function sendMessage (
  message: Message
): Promise<any> {
  const queryOptions = { active: true, lastFocusedWindow: true }
  const [tab] = await window.chrome.tabs.query(queryOptions)
  if (!(tab)) {
    return
  }

  const res = await window.chrome.tabs.sendMessage(tab.id, message)
  return res
}

export async function $message (text: string, messageType: MessageType = 'success'): Promise<void> {
  return await sendMessage({ type: 'callMessage', text, messageType })
}
