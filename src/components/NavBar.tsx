import { NavLink } from 'react-router-dom'
import { Icons } from '@/assets/Icons'

const items = [
  { name: '捷運路線圖', router: '/route-map', icon: Icons.RouteMap },
  { name: '列車動態', router: '/train-status', icon: Icons.Train },
  { name: '首頁', router: '/', icon: Icons.Home },
  { name: 'AI 在地嚮導', router: '/ai-guide', icon: Icons.AiGuide },
  { name: '個人資訊', router: '/profile', icon: Icons.Profile },
]

export function NavBar() {
  return (
    <div className="max-w-app fixed bottom-0 w-full px-2.5">
      <nav className="bg-gray-bg flex w-full items-center justify-between rounded-t-3xl px-2 py-4">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              className={({ isActive, isPending }) =>
                [
                  'flex flex-1 flex-col items-center text-gray-600',
                  isPending ? 'text-gray-600' : '',
                  isActive ? 'text-primary' : '',
                ].join(' ')
              }
              key={item.name}
              to={item.router}
              viewTransition
            >
              <Icon className="size-[30px]" />
              <span className="mt-1 text-xs">{item.name}</span>
            </NavLink>
          )
        })}
      </nav>
    </div>
  )
}
