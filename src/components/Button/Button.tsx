import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva('bg-primary font-medium text-white rounded-[10px]', {
  variants: {
    size: {
      lg: 'py-[15px] px-[30px] font-semibold',
      md: 'py-[10px] px-[30px] font-semibold',
      sm: 'py-[6px] px-[10px] font-medium text-[20px]',
    },
    full: {
      true: 'w-full',
      false: 'w-fit',
    },
  },
  defaultVariants: {
    size: 'sm',
    full: false,
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, full, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ full, className, size })}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
