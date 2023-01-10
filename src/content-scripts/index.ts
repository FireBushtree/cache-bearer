export interface Message {
  type: 'getCookie'
}

chrome.runtime.onMessage.addListener(function (message: Message, sender: any, sendResponse: any) {
  switch (message.type) {
    case 'getCookie':
      sendResponse(window.document.cookie)
      break
  }
})
