export interface Message {
  type: 'getCookie'
}

export function a (a: string): number {
  console.log(a)
  return 123
}

window.chrome.runtime.onMessage.addListener(
  function (message: Message, sender: any, sendResponse: any) {
    switch (message.type) {
      case 'getCookie':
        sendResponse(window.document.cookie)
        break
    }
  }
)
