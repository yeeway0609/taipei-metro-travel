'use client'
import { useTransitionRouter } from 'next-view-transitions'
import Image from 'next/image'
import ArrowLeftIcon from '@/assets/arrow-left.svg'

interface NavHeaderProps {
  title: string
}

export function NavHeader({ title }: NavHeaderProps) {
  const router = useTransitionRouter()

  return (
    <div className="relative flex bg-white p-5">
      <button className="size-[21px]" type="button" onClick={() => router.back()}>
        <Image src={ArrowLeftIcon} width={21} height={21} alt="回前頁" />
      </button>

      <h1 className="text-title absolute top-5 left-1/2 -translate-x-1/2 text-gray-900">{title}</h1>
    </div>
  )
}
