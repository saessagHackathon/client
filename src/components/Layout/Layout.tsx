import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="h-dvh w-dvw bg-gray-50">
      <main className="mx-auto aspect-[1/2.165] h-dvh max-h-[100dvh] w-dvw max-w-[600px] bg-white px-30 py-40">
        <Outlet />
      </main>
    </div>
  )
}
