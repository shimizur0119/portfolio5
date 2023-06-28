import gsap from 'gsap'

import topPageStyle from '@/pages/index.module.scss'

import type { MutableRefObject } from 'react'

export default function topPageInitialAnim(
  elmWrapRef: MutableRefObject<HTMLElement>
) {
  const q = gsap.utils.selector(elmWrapRef)
  const tl = gsap.timeline()
  tl.to(q(`.${topPageStyle.fvSection}`), {
    backdropFilter: 'blur(20px)',
    pointerEvents: 'all'
  })
    .to(q(`.${topPageStyle.mainText} span`), {
      stagger: {
        amount: 0.5
      },
      y: 0
    })
    .to(q(`.${topPageStyle.fvSection}`), {
      backdropFilter: 'blur(0px)',
      pointerEvents: 'none'
    })
    .to(q(`.${topPageStyle.mainText} span`), {
      delay: -0.2,
      stagger: {
        amount: 0.3
      },
      y: 100
    })
}
