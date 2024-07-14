import { cva, VariantProps } from 'class-variance-authority'
import { PropsWithChildren } from 'react'

const chatVariants = cva(
  'text-15 px-30 py-15 max-w-[250px] rounded-20 w-fit text-white animate-appearBottom',
  {
    variants: {
      type: {
        opposite: 'bg-gray-100 text-black',
        me: 'bg-primary text-white',
      },
    },
    defaultVariants: {
      type: 'opposite',
    },
  },
)

interface ChatProps
  extends VariantProps<typeof chatVariants>,
    PropsWithChildren {}

export const Chat = ({ children, type }: ChatProps) => {
  return <div className={chatVariants({ type })}>{children}</div>
}
