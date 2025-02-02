export {};

declare global {
  interface Window {
    ymaps3: typeof ymaps3 | undefined,
  }
}
