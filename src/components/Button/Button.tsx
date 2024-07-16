import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'bg-primary font-medium text-white text-[20px] rounded-[10px] flex items-center justify-center whitespace-nowrap',
  {
    variants: {
      size: {
        lg: 'py-[15px] px-[30px] font-semibold rounded-[20px]',
        md: 'py-[10px] px-[30px] font-semibold',
        sm: 'py-[10px] px-[30px] font-medium text-[15px] rounded-[30px] ',
      },
      full: {
        true: 'w-full',
        false: 'w-fit',
      },
    },
    defaultVariants: {
      size: 'md',
      full: false,
    },
  },
)

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
      >
        <p>{props.children}</p>
      </button>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
