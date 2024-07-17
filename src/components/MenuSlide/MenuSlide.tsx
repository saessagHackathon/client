/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import { Tag } from '@components/Tag'
import { Menu, Store } from '@interface/menu'
import { LLMResponse } from '@interface/llm'

interface MenuSlideProps {
  slides: Menu[]
  options?: EmblaOptionsType
}

export const MenuSlide = ({ slides, options }: MenuSlideProps) => {
  const [emblaRef] = useEmblaCarousel(options)

  const storeQuery = useSuspenseQuery({
    queryKey: ['store'],
    queryFn: async () => {
      const res = await fetch(
        'https://port-0-backend-lydacqomf26e2cc7.sel5.cloudtype.app/api/shop_list',
      )
      return res.json() as unknown as Store[]
    },
  })

  const searchParams = useParams()

  const storeName = storeQuery.data.find(
    (store) => store.id === Number(searchParams.storeId),
  )?.shop_name

  const [selectedMenuId, setSelectedMenuId] = useState<string | null>(null)

  // const mainSendQuery = useQuery({
  //   queryKey: ['main'],
  //   staleTime: 0,
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `https://port-0-backend-lydacqomf26e2cc7.sel5.cloudtype.app/api/${storeName}/menu/main/불고기`,
  //     )
  //     return res.json() as unknown as LLMResponse
  //   },
  //   enabled: storeName !== undefined && selectedMenuId !== null,
  // })
  // const drinkSendQuery = useQuery({
  //   queryKey: ['drink'],
  //   staleTime: 0,
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `https://port-0-backend-lydacqomf26e2cc7.sel5.cloudtype.app/api/${storeName}/menu/drink/콜라`,
  //     )
  //     return res.json() as unknown as LLMResponse
  //   },
  //   enabled: mainSendQuery.isSuccess,
  // })
  // const sideSendQuery = useQuery({
  //   queryKey: ['side'],
  //   staleTime: 0,
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `https://port-0-backend-lydacqomf26e2cc7.sel5.cloudtype.app/api/${storeName}/menu/side/감자튀김`,
  //     )
  //     return res.json() as unknown as LLMResponse
  //   },
  //   enabled: drinkSendQuery.isSuccess,
  // })
  console.log(mainSendQuery.data)
  console.log(drinkSendQuery.data)
  console.log(sideSendQuery.data)

  // const sideSendQuery = useQuery({
  //   queryKey: [],
  //   staleTime: 0,
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `https://port-0-backend-lydacqomf26e2cc7.sel5.cloudtype.app/api/${storeName}/menu/side/${selectedMenuId}`,
  //     )
  //     return res.json() as unknown as LLMResponse
  //   },
  //   enabled: storeName !== undefined && menuSendQuery.isSuccess,
  // })

  // console.log(sideSendQuery.data)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {[...slides, ...slides].map((menu, idx) => (
            <div className="embla__slide" key={menu.id + ' ' + idx}>
              <div className="embla__slide__number mb-[20px] bg-gray-50">
                <img
                  onClick={() => setSelectedMenuId(String(menu.id))}
                  src={menu.menu_image_url}
                  alt={menu.menu_name}
                  className="h-full w-full"
                />
              </div>
              <ul className="mx-auto flex w-fit gap-[10px]">
                {menu.menu_tag.map((tag) => (
                  <Tag key={tag.tag_id}>{tag.tag_content}</Tag>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
