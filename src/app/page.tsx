import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'
import { getTrackInfo } from '@/lib/metro-api'

export default async function Home() {
  // const t = useTranslations('HomePage')
  const t = await getTranslations('HomePage')
  const trackInfo = await getTrackInfo()
  console.log(trackInfo)

  return (
    <div className="">
      {trackInfo && (
        <>
          <p>{trackInfo[0].DestinationName}</p>
          <p>{trackInfo[0].CountDown}</p>
        </>
      )}
    </div>
  )
}
