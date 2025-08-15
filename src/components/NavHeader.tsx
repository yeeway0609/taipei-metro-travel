'use client'
import { useTransitionRouter } from 'next-view-transitions'
import { Icons } from '@/assets/icons'

interface NavHeaderProps {
  title: string
}

export function NavHeader({ title }: NavHeaderProps) {
  const router = useTransitionRouter()

  return (
    <div className="h-nav-header relative flex bg-white p-5">
      <button className="size-[21px]" type="button" onClick={() => router.back()}>
        <Icons.ArrowLeft className="size-[21px]" />
      </button>

      <h1 className="text-title absolute top-5 left-1/2 -translate-x-1/2 text-gray-900">{title}</h1>
    </div>
  )
}
