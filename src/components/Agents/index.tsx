import { Swiper, SwiperSlide } from 'swiper/react'

import { CardAgent } from 'components/CardAgent'
import { AGENT } from 'utils/agent'

import styles from './styles.module.scss'

import 'swiper/css'

export const Agents = () => {
  return (
    <Swiper className={styles.agents} spaceBetween={16} slidesPerView={4}>
      <SwiperSlide>
        <CardAgent {...AGENT} />
      </SwiperSlide>
      <SwiperSlide>
        <CardAgent {...AGENT} />
      </SwiperSlide>
      <SwiperSlide>
        <CardAgent {...AGENT} />
      </SwiperSlide>
      <SwiperSlide>
        <CardAgent {...AGENT} />
      </SwiperSlide>
      <SwiperSlide>
        <CardAgent {...AGENT} />
      </SwiperSlide>
      <SwiperSlide>
        <CardAgent {...AGENT} />
      </SwiperSlide>
    </Swiper>
  )
}
