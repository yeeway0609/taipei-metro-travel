import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom'
import App from './App.tsx'
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import AiGuide from '@/pages/AiGuide'
import RouteMap from '@/pages/RouteMap'
import TrainStatus from '@/pages/TrainStatus'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route index element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/ai-guide" element={<AiGuide />} />
      <Route path="/route-map" element={<RouteMap />} />
      <Route path="/train-status" element={<TrainStatus />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
)

export default router
