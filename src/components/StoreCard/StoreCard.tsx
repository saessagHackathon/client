import { Link } from 'react-router-dom'

import { Button } from '@components/Button'

interface StoreCardProps {
  logo: string
  name: string
  storeId: string
}

export const StoreCard = ({ logo, name, storeId }: StoreCardProps) => {
  return (
    <div className="flex h-84 w-full justify-between rounded-20 p-20 shadow-md">
      <div className="flex items-center gap-[30px]">
        <div className="aspect-square h-full overflow-hidden rounded-full">
          <img className="h-full w-full object-cover" src={logo} alt="logo" />
        </div>
        <p className="text-25 font-semibold">{name}</p>
      </div>
      <Link to={`/order/${storeId}/menu`}>
        <Button>선택</Button>
      </Link>
    </div>
  )
}
