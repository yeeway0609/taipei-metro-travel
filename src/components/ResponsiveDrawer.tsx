'use client'
import { useState } from 'react'
import { clsx } from 'clsx'
import { Drawer } from 'vaul'

interface ResponsiveDrawerProps {
  children: React.ReactNode
  maxHeightRatio?: number
}

export function ResponsiveDrawer({ children, maxHeightRatio = 0.8 }: ResponsiveDrawerProps) {
  const snapPoints = ['220px', maxHeightRatio]
  const [snap, setSnap] = useState<number | string | null>(snapPoints[0])

  return (
    <Drawer.Root
      open
      handleOnly
      dismissible={false}
      modal={false}
      repositionInputs={false}
      snapPoints={snapPoints}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
    >
      <Drawer.Portal>
        <Drawer.Content className="border-b-none fixed right-0 bottom-0 left-0 z-40 flex h-full min-h-[240px] flex-col rounded-t-xl border border-gray-200 bg-white shadow-[0_0_15px_-5px_rgba(0,0,0,0.25)]">
          <Drawer.Handle className="my-2" style={{ width: '80px' }} />

          <div
            className={clsx('mx-auto flex w-full max-w-md flex-col p-5 pt-4', {
              'overflow-y-auto': snap === snapPoints[1],
              'overflow-hidden': snap !== snapPoints[1],
            })}
          >
            <Drawer.Title className="sr-only"></Drawer.Title>
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
