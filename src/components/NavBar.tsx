'use client'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { clsx } from 'clsx'
import { Icons } from '@/assets/icons'

const items = [
  { name: 'page/route_map', path: '/route-map', icon: Icons.RouteMap },
  { name: 'page/train_status', path: '/train-status', icon: Icons.Train },
  { name: 'page/home', path: '/', icon: Icons.Home },
  { name: 'page/ai_guide', path: '/ai-guide', icon: Icons.AiGuide },
  { name: 'page/profile', path: '/profile', icon: Icons.Profile },
]

export function NavBar() {
  const t = useTranslations('Common')
  const pathname = usePathname()
  const firstPathSegment = '/' + pathname.split('/')[1] || ''

  return (
    <div className="max-w-app fixed bottom-0 w-full px-2.5">
      <nav className="bg-gray-bg flex w-full items-center justify-between rounded-t-3xl px-2 py-4">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <Link
              className={clsx(
                'flex flex-1 flex-col items-center text-gray-600',
                firstPathSegment === item.path ? 'text-primary-blue' : ''
              )}
              key={item.name}
              href={item.path}
            >
              <Icon className="size-[30px]" />
              <span className="text-caption mt-1">{t(item.name)}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
