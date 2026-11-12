/** Smoothly scrolls to an element by id (instant when reduced motion is requested). */
export function scrollToId(id: string): void {
  document.getElementById(id)?.scrollIntoView({ block: 'start' })
}
