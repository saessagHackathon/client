import { Link } from 'react-router-dom'

import { Button } from '@components/Button'

const Logo = () => (
  <svg
    width="29"
    height="75"
    viewBox="0 0 29 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.61976 71.3387L0.77914 27.3949C0.470112 25.1699 1.05726 23.207 2.5406 21.5061C4.02393 19.8052 5.8781 18.956 8.1031 18.9584H20.8968C23.1218 18.9584 24.976 19.8076 26.4593 21.5061C27.9427 23.2045 28.5298 25.1674 28.2208 27.3949L22.3802 71.3387C22.2566 72.2657 21.84 73.0383 21.1305 73.6564C20.4209 74.2744 19.6014 74.5834 18.6718 74.5834H10.3281C9.40101 74.5834 8.58147 74.2744 7.86947 73.6564C7.15747 73.0383 6.7409 72.2657 6.61976 71.3387ZM14.5 15.2501C12.4604 15.2501 10.715 14.5245 9.26381 13.0733C7.81261 11.6221 7.08578 9.87549 7.08331 7.83344C7.08083 5.79138 7.80767 4.046 9.26381 2.59727C10.7199 1.14855 12.4653 0.421718 14.5 0.416773C16.5346 0.411829 18.2812 1.13866 19.7398 2.59727C21.1985 4.05588 21.9241 5.80127 21.9166 7.83344C21.9092 9.86561 21.1836 11.6122 19.7398 13.0733C18.2961 14.5344 16.5494 15.26 14.5 15.2501Z"
      fill="#FF5757"
    />
  </svg>
)

export const MainPage = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="animate-appearBottomSm align-center flex h-full w-full flex-col items-center justify-center gap-4">
        <p className="text-40 font-black text-primary">주문 도우미</p>
        <Logo />
      </div>
      <Link to="/store">
        <Button size="lg" full>
          메뉴 주문 시작하기
        </Button>
      </Link>
    </div>
  )
}
