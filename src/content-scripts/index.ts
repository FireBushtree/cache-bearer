import { stra } from './stra'

export interface Message {
  type: keyof typeof stra
}

window.chrome.runtime.onMessage.addListener(
  function (message: Message, sender: any, sendResponse: any) {
    const messageHandler = stra[message.type]
    if (!messageHandler) {
      sendResponse()
    }

    sendResponse(messageHandler())
  }
)
