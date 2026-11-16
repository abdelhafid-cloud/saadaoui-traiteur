import { cn } from '@/lib/utils'

export function Container({ className, as: Component = 'div', children, ...props }) {
  return (
    <Component className={cn('container-site', className)} {...props}>
      {children}
    </Component>
  )
}
