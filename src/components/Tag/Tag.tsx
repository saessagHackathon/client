import { cva, VariantProps } from 'class-variance-authority'
import { PropsWithChildren } from 'react'

const tagVariants = cva(
  'flex items-center justify-center w-fit rounded-[30px] px-30 py-4',
  {
    variants: {
      fill: {
        true: 'bg-primary border-primary border-[1px] text-white',
        false: 'bg-transparent border-primary border-[1px] text-primary',
      },
    },
    defaultVariants: {
      fill: false,
    },
  },
)
interface TagProps
  extends PropsWithChildren,
    VariantProps<typeof tagVariants> {}

export const Tag = ({ fill, children }: TagProps) => {
  return (
    <div className={tagVariants({ fill })}>
      <p className="text-15 h-24 w-fit text-center font-semibold">{children}</p>
    </div>
  )
}
