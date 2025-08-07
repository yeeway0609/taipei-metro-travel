import type * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root data-slot="tabs" className={cn('flex flex-col gap-1.5', className)} {...props} />
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn('inline-flex w-fit items-center justify-center gap-2', className)}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  divClassName,
  size = 'sm',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & { divClassName?: string; size?: 'sm' | 'lg' }) {
  return (
    <div className="flex-1">
      <TabsPrimitive.Trigger
        data-slot="tabs-trigger"
        className={cn(
          'peer inline-flex h-[calc(100%-1px)] w-full items-center justify-center whitespace-nowrap',
          size === 'sm' && 'data-[state=active]:text-body-bold text-body',
          size === 'lg' && 'data-[state=active]:text-title-bold text-title pb-2',
          className
        )}
        {...props}
      />
      <div
        className={cn(
          'from-primary-blue to-primary-green w-full peer-data-[state=active]:bg-gradient-to-r',
          size === 'sm' && 'h-0.5',
          size === 'lg' && 'h-1',
          divClassName
        )}
      />
    </div>
  )
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content data-slot="tabs-content" className={cn('flex-1 outline-none', className)} {...props} />
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
