declare global {
  interface Window {
    umami: {
      track: (eventName: string, eventData?: Record<string, unknown>) => void
    }
  }
}

export const trackEvent = (
  eventName: string,
  eventData?: Record<string, unknown>
): void => {
  if (typeof window !== 'undefined' && window.umami && window.umami.track) {
    window.umami.track(eventName, eventData)
  }
}
