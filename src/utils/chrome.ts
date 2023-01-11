import { storage } from './storage'

export const hanleCacheAction = async (type: keyof typeof storage): Promise<void> => {
  const message = await sendMessage(type)
  if (!message) {
    return
  }

  const handler = storage[type]
  handler && handler()
}

export async function sendMessage (type: string): Promise<any> {
  const queryOptions = { active: true, lastFocusedWindow: true }
  const [tab] = await window.chrome.tabs.query(queryOptions)
  if (!(tab)) {
    return
  }

  const res = await window.chrome.tabs.sendMessage(tab.id, { type })
  return res
}
