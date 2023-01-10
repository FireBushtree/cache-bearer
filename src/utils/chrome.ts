export async function sendMessage (type: string): Promise<any> {
  const queryOptions = { active: true, lastFocusedWindow: true }
  const [tab] = await window.chrome.tabs.query(queryOptions)
  if (!(tab)) {
    return
  }

  const res = await window.chrome.tabs.sendMessage(tab.id, { type })
  return res
}
