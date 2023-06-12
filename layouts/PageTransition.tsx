import { useState, useRef } from "react";

import { gsap } from "gsap";
import { Flip } from "gsap/dist/Flip";
import { useRouter } from "next/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import commonFvSectionStyle from "../components/commonFvSection.module.scss";
import topPageStyle from "../pages/index.module.scss";

gsap.registerPlugin(Flip);

type Props = {
  children: React.ReactNode;
};

const checkPageTransitionType = (currentPath: string, beforePath: string) => {
  const level2PagesPaths = ["/work", "/about", "/contact", "/blog", "/other"];
  if (level2PagesPaths.includes(currentPath) && beforePath === "/") {
    return "top => level2";
  } else if (level2PagesPaths.includes(beforePath) && currentPath === "/") {
    return "level2 => top";
  } else {
    return "other";
  }
};

export default function PageTransition({ children }: Props) {
  const router = useRouter();
  const ref = useRef(null);
  const [beforePath, setBeforePath] = useState(router.asPath);
  const q = gsap.utils.selector(ref);
  const level2FvSel = `.${commonFvSectionStyle.inner}`;

  const onEnter = (elm: HTMLDivElement) => {
    console.log("onEnter", router.asPath);
    const pageTransitionType = checkPageTransitionType(
      router.asPath,
      beforePath
    );

    // 共通処理
    gsap.set("body", { overflow: "hidden" });
    gsap.set(elm, {
      height: "100vh",
      left: 0,
      opacity: 0,
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: -1,
    });
    const tl = gsap.timeline();

    // topページから第二階層ページに遷移するとき
    if (pageTransitionType === "top => level2") {
      const clickSlug = router.asPath.split("/")[1];
      const activeCard = document.querySelector(
        `.${topPageStyle.sectionItem}.u-${clickSlug}`
      );
      const activeCardRect = activeCard.getBoundingClientRect();
      const disableCards = document.querySelectorAll(
        `.${topPageStyle.sectionItem}:not(.u-${clickSlug})`
      );

      tl.to(disableCards, {
        duration: 0.1,
        opacity: 0,
      })
        .set(activeCard, {
          height: activeCardRect.height,
          left: activeCardRect.left,
          position: "absolute",
          top: activeCardRect.top,
          width: activeCardRect.width,
        })
        .to(activeCard, {
          duration: 0.3,
          height: "calc(100vh - 20px)",
          left: 10,
          top: 10,
          width: "calc(100vw - 20px)",
        })
        .set(level2FvSel, {
          height: "calc(100vh - 20px)",
        });
    }

    // 第二階層ページからtopページに遷移するとき
    else if (pageTransitionType === "level2 => top") {
      console.log("level2 => top");
      const clickSlug = beforePath.split("/")[1];
      const activeCard = document.querySelector(
        `.${topPageStyle.sectionItem}.u-${clickSlug}`
      );
      const activeCardRect = activeCard.getBoundingClientRect();
      const disableCards = document.querySelectorAll(
        `.${topPageStyle.sectionItem}:not(.u-${clickSlug})`
      );

      tl.to(`.pageAnim-enter-done .pageWrap footer`, {
        duration: 0.1,
        opacity: 0,
      })
        .to(level2FvSel, {
          duration: 0.3,
          height: activeCardRect.height,
          left: activeCardRect.left,
          position: "absolute",
          top: activeCardRect.top,
          width: activeCardRect.width,
        })
        .set(disableCards, {
          opacity: 0,
        });
    }
  };
  const onEntered = (elm: HTMLDivElement) => {
    console.log("onEntered", router.asPath);
    const pageTransitionType = checkPageTransitionType(
      router.asPath,
      beforePath
    );
    const tl = gsap.timeline();

    // topページから第二階層ページに遷移するとき
    if (pageTransitionType === "top => level2") {
      tl.to(level2FvSel, {
        height: "auto",
      });
    }
    // 第二階層ページからtopページに遷移するとき
    else if (pageTransitionType === "level2 => top") {
      const clickSlug = beforePath.split("/")[1];
      const disableCards = document.querySelectorAll(
        `.${topPageStyle.sectionItem}:not(.u-${clickSlug})`
      );

      tl.to(disableCards, {
        opacity: 1,
      });
    }

    setBeforePath(router.asPath);
    gsap.set([elm, "body"], {
      clearProps: "all",
    });
  };

  const onExit = (elm: HTMLDivElement) => {
    console.log("onExit", router.asPath);
    gsap.set("body", {
      overflow: "hidden",
    });
    gsap.set(elm, {
      height: "100vh",
      left: 0,
      overflow: "hidden",
      position: "fixed",
      top: 0,
      width: "100vw",
      zIndex: 2,
    });
  };
  const onExited = (elm: HTMLDivElement) => {
    console.log("onExited", router.asPath);
    gsap.set([elm, "body"], {
      clearProps: "all",
    });
  };
  return (
    <TransitionGroup>
      <CSSTransition
        classNames="pageAnim"
        key={router.asPath}
        onEnter={onEnter}
        onEntered={onEntered}
        onExit={onExit}
        onExited={onExited}
        timeout={400}
      >
        <div ref={ref}>{children}</div>
      </CSSTransition>
    </TransitionGroup>
  );
}
