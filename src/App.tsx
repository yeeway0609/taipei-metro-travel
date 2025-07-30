import { Outlet } from 'react-router-dom'
import { NavBar } from '@/components/NavBar'

export default function App() {
  return (
    <div className="max-w-app pb-navbar mx-auto min-h-dvh w-full bg-white">
      <Outlet />
      <NavBar />
    </div>
  )
}
