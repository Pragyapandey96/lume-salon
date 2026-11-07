import { useSyncExternalStore } from 'react'

const THRESHOLD = 8

function subscribe(onChange: () => void) {
  window.addEventListener('scroll', onChange, { passive: true })
  return () => window.removeEventListener('scroll', onChange)
}

const getSnapshot = () => window.scrollY > THRESHOLD
const getServerSnapshot = () => false

/** True once the page has been scrolled past a small threshold. */
export function useScrolled(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
