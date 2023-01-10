export {}

declare module '*.vue';
declare global {
  interface Window {
    chrome: any
  }
}
