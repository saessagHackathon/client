import { useSuspenseQuery } from '@tanstack/react-query'

import { StoreCard } from '@components/StoreCard'
import { Store } from '@interface/menu'

const Megaphone = () => (
  <svg
    width="47"
    height="40"
    viewBox="0 0 47 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M39.5418 12.3333V26.0833C43.4377 26.0833 46.4168 23.1042 46.4168 19.2083C46.4168 15.3125 43.4377 12.3333 39.5418 12.3333ZM21.2085 10.0417H5.16683C2.646 10.0417 0.583496 12.1042 0.583496 14.625V23.7917C0.583496 26.3125 2.646 28.375 5.16683 28.375H7.4585V35.25C7.4585 37.7708 9.521 39.8333 12.0418 39.8333H16.6252V28.375H21.2085L30.3752 37.5417H34.9585V0.875H30.3752L21.2085 10.0417Z"
      fill="#FF5757"
    />
  </svg>
)

export const StorePage = () => {
  const storeQuery = useSuspenseQuery({
    queryKey: ['store'],
    queryFn: async () => {
      const res = await fetch(
        'https://port-0-backend-lydacqomf26e2cc7.sel5.cloudtype.app/api/shop_list',
      )
      return res.json() as unknown as Store[]
    },
  })

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="align-center flex h-full w-full flex-col items-center justify-center gap-4">
        <Megaphone />
        <p className="text-center text-28 font-bold text-gray-100">
          원하는 가게를
          <br />
          선택해주세요
        </p>
      </div>
      <ul className="flex list-none flex-col gap-30">
        {storeQuery.data.map((store, idx) => (
          <li
            className="animate-appearBottomSm opacity-0"
            key={store.id}
            style={{
              animationDelay: `${idx * 200}ms`,
            }}
          >
            <StoreCard
              storeId={store.id.toString()}
              logo={store.shop_image_url}
              name={store.shop_name}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
