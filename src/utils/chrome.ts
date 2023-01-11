import { Message } from '../content-scripts'
import { storage } from './storage'

export const copyCookie = async (): Promise<void> => {
  const message = await sendMessage({ type: 'copyCookie' })
  if (message) {
    storage.setCookie(message)
  }
}

export const pasteCookie = async (): Promise<void> => {
  const cookie = await storage.getCookie()
  if (cookie) {
    await sendMessage({ type: 'pasteCookie', text: cookie })
  }
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
