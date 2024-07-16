import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

import { Tag } from '@components/Tag'

interface PropType {
  slides: number[]
  options?: EmblaOptionsType
}

export const MenuSlide: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number mb-[20px] bg-gray-50">
                {index + 1}
              </div>
              <ul className="mx-auto flex w-fit gap-[10px]">
                <Tag>닭가슴살</Tag>
                <Tag>매움</Tag>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
