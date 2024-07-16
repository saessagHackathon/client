import { PropsWithChildren } from 'react'

import bubbleTail from './bubbleTail.png'

import { Button } from '@components/Button'
import { MegaphoneIcon } from '@components/MegaphoneIcon'
import { Microphone } from '@components/Microphone'
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

const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const MenuPage = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="align-center flex h-full w-full flex-col items-center justify-center gap-[30px]">
        <MegaphoneIcon />
        <p className="text-center text-28 font-bold text-gray-100">
          메뉴판을 보고 사진을 눌러
          <br />
          원하는 메뉴를 담아주세요
        </p>
        <Button size="sm">완료</Button>
        <div className="h-[300px]" />
        <div className="absolute w-full max-w-[600px] translate-y-[70px]">
          <div>
            <MenuSlide slides={SLIDES} options={{ loop: true }} />
          </div>
        </div>
        <div className="flex w-full items-center justify-around">
          <Bubble>도움이 필요하면 눌러주세요</Bubble>
          <Microphone size="md" onClick={() => {}} />
        </div>
      </div>
    </div>
  )
}
