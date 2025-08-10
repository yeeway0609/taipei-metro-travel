'use client'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Ring2 } from 'ldrs/react'
import 'ldrs/react/Ring2.css'
import { NavHeader } from '@/components/NavHeader'
import photoIcon from '@/assets/photo.svg'
import { showNotImplementedToast } from '@/lib/utils'
import { AiResult } from './AiResult'

export default function AiGuidePage() {
  const tCommon = useTranslations('Common')
  const tAiGuide = useTranslations('AiGuidePage')
  const [isLoadingResult, setIsLoadingResult] = useState(false)
  const [showResult, setShowResult] = useState(false)

  function handleUpload() {
    setIsLoadingResult(true)

    setTimeout(() => {
      setIsLoadingResult(false)
      setShowResult(true)
    }, 2000)
  }

  return (
    <div className="pb-navbar min-h-dvh bg-gray-200">
      <NavHeader title={tCommon('page/ai_guide')} />
      <div className="bg-gradient-primary h-1 w-full" />

      {!showResult ? (
        <>
          <p className="text-body my-8 text-center">{tAiGuide('hint_message')}</p>

          <div className="mx-auto flex w-5/6 flex-col items-center rounded-2xl bg-gray-100 p-10">
            <Image src={photoIcon} width={55} height={55} alt="Photo Icon" className="mb-5" />
            <p className="text-title mb-5 text-center text-gray-600">{tAiGuide('upload_destination_photo')}</p>
            <button
              className="text-title bg-gradient-primary flex w-full max-w-5/6 items-center justify-center gap-1.5 rounded px-4 py-2 text-white"
              onClick={handleUpload}
            >
              {isLoadingResult ? (
                <>
                  <Ring2 size="12" stroke="2" strokeLength="0.25" bgOpacity="0.1" speed="0.8" color="white" />
                  <span>{tAiGuide('demo_loading')}</span>
                </>
              ) : (
                tAiGuide('upload')
              )}
            </button>

            <p className="text-body mt-4">
              <span className="my-5 text-center text-gray-600">{tAiGuide('or')}</span>{' '}
              <button className="underline underline-offset-2" onClick={showNotImplementedToast}>
                {tAiGuide('take_photo')}
              </button>
            </p>
          </div>
        </>
      ) : (
        <AiResult />
      )}
    </div>
  )
}
