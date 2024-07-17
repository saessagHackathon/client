import { MegaphoneIcon } from '@components/MegaphoneIcon'
import { Microphone } from '@components/Microphone'
import { SoundEffect } from '@components/SoundEffect'

export const ChatPage = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="align-center my-[5dvh] flex h-full w-full flex-col items-center justify-evenly">
        <MegaphoneIcon />
        <p className="animate-appearBottomSm block h-[150px] break-keep text-center text-25 font-bold text-gray-100">
          불고기 버거를 담으셨네요. 햄버거만 구매하시겠어요? 아니면 감자튀김과
          음료로 구성된 묶음메뉴로 구매하시겠어요?
        </p>
        <div className="flex flex-col items-center gap-[20px]">
          <Microphone size="lg" onClick={() => {}} />
          <p className="underline">채팅 형태로 보기</p>
        </div>
        <div className="fixed bottom-0 left-0 opacity-[0.2]">
          <SoundEffect className="absolute bottom-[-60dvw] left-0 z-[-10] aspect-square w-[100dvw] animate-spread rounded-full opacity-[0.7]" />
        </div>
      </div>
    </div>
  )
}
