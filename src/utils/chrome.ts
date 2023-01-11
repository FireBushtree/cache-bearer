import { Message } from '../content-scripts'
import { storage } from './storage'

export const copyCookie = async (): Promise<void> => {
  console.log(123)
  const message = await sendMessage({ type: 'copyCookie' })
  console.log(message)
  if (message) {
    storage.setCookie(message)
    console.log(storage.getCookie())
  }
}

export const pasteCookie = async (): Promise<void> => {
  const cookie = storage.getCookie()
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
