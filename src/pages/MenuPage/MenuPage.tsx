import { PropsWithChildren } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSuspenseQuery } from '@tanstack/react-query'

import bubbleTail from './bubbleTail.png'

import { Button } from '@components/Button'
import { MegaphoneIcon } from '@components/MegaphoneIcon'
import { Microphone } from '@components/Microphone'
import { Menu } from '@interface/menu'
import { MenuSlide } from '@components/MenuSlide'

const Bubble = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative flex h-fit items-center justify-center rounded-[10px] bg-bubble p-[20px] text-center shadow-sm">
      <p className="text-[15px] text-gray-100">{children}</p>
      <div className="absolute right-[0] top-[20px] translate-x-[100%]">
        <img className="h-[24px] w-[27px]" src={bubbleTail} alt="" />
      </div>
    </div>
  )
}

export const MenuPage = () => {
  const searchParams = useParams()

  const menuQuery = useSuspenseQuery({
    queryKey: ['menu', searchParams.stroeId],
    queryFn: async () => {
      const res = await fetch(
        `https://port-0-backend-lydacqomf26e2cc7.sel5.cloudtype.app/api/${searchParams.stroeId}/menu/main`,
      )
      return res.json() as unknown as Menu[]
    },
  })

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="align-center flex h-full w-full flex-col items-center justify-center gap-[30px]">
        <MegaphoneIcon />
        <p className="animate-appearBottomSm text-center text-28 font-bold text-gray-100">
          메뉴판을 보고 사진을 눌러
          <br />
          원하는 메뉴를 담아주세요
        </p>
        <Link to="/chat" className="animate-appearBottomSm">
          <Button size="sm">완료</Button>
        </Link>
        <div className="h-[300px]" />
        <div className="absolute w-full max-w-[600px] translate-y-[70px]">
          <div className="animate-appearBottomSm opacity-0">
            <MenuSlide slides={menuQuery.data} options={{ loop: true }} />
          </div>
        </div>
        <div className="flex w-full animate-appearBottomSm items-center justify-around">
          <Bubble>도움이 필요하면 눌러주세요</Bubble>
          <Microphone size="md" onClick={() => {}} />
        </div>
      </div>
    </div>
  )
}
