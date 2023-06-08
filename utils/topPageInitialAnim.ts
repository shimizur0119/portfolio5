import type { MutableRefObject } from "react";

import gsap from "gsap";

import topPageStyle from "../pages/index.module.scss";

export default function topPageInitialAnim(
  elmWrapRef: MutableRefObject<HTMLElement>
) {
  const q = gsap.utils.selector(elmWrapRef);
  const tl = gsap.timeline();
  tl.to(q(`.${topPageStyle.fvSection}`), {
    backdropFilter: "blur(20px)",
  })
    .to(q(`.${topPageStyle.mainText} span`), {
      stagger: {
        amount: 0.5,
      },
      y: 0,
    })
    .to(q(`.${topPageStyle.fvSection}`), {
      backdropFilter: "blur(0px)",
    })
    .to(q(`.${topPageStyle.mainText} span`), {
      stagger: {
        amount: 0.5,
      },
      y: 100,
    });
}
