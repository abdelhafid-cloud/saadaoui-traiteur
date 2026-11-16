import { motion, useReducedMotion } from 'framer-motion'

const defaultVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  y = 28,
  as = 'div',
  once = true,
  amount = 0.2,
}) {
  const reduceMotion = useReducedMotion()
  const Component = motion[as] || motion.div

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </Component>
  )
}

export function RevealItem({ children, className, delay = 0 }) {
  return (
    <Reveal className={className} delay={delay}>
      {children}
    </Reveal>
  )
}

export { defaultVariants }
