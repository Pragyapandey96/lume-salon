import { MotionConfig } from 'framer-motion'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/app/router'

export default function App() {
  return (
    // reducedMotion="user" disables transform animations for people who
    // have enabled "reduce motion" in their operating system.
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  )
}
