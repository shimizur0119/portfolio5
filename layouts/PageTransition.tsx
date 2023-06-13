import { useState, useRef } from "react";

import { gsap } from "gsap";
import { Flip } from "gsap/dist/Flip";
import { useRouter } from "next/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import commonFvSectionStyle from "../components/commonFvSection.module.scss";
import topPageStyle from "../pages/index.module.scss";

import s from "./pageTransition.module.scss";

gsap.registerPlugin(Flip);

type Props = {
  children: React.ReactNode;
};

const checkPageTransitionType = (currentPath: string, beforePath: string) => {
  const level2PagesPaths = ["/work", "/about", "/contact", "/blog", "/other"];
  const checkLevel2PagesPaths = (path) => {
    return (
      level2PagesPaths.includes(path) ||
      (path.split("/").includes("blog") && path.split("/").includes("tags"))
    );
  };
  if (checkLevel2PagesPaths(currentPath) && beforePath === "/") {
    return "top => level2";
  } else if (checkLevel2PagesPaths(beforePath) && currentPath === "/") {
    return "level2 => top";
  } else {
    return "other";
  }
};

export default function PageTransition({ children }: Props) {
  const gridRef = useRef(null);
  const q = gsap.utils.selector(gridRef);
  const router = useRouter();
  const [beforePath, setBeforePath] = useState(router.asPath);
  const level2FvSel = `.${commonFvSectionStyle.inner}`;

  const onEnter = () => {
    const pageTransitionType = checkPageTransitionType(
      router.asPath,
      beforePath
    );

    // 共通処理
    gsap.set("body", { overflow: "hidden" });
    gsap.set(".pageAnim-enter", {
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
      const clickSlug = beforePath.split("/")[1];
      const activeCard = document.querySelector(
        `.${topPageStyle.sectionItem}.u-${clickSlug}`
      );
      const activeCardRect = activeCard.getBoundingClientRect();
      const disableCards = document.querySelectorAll(
        `.${topPageStyle.sectionItem}:not(.u-${clickSlug})`
      );
      const footer = document
        .querySelector(level2FvSel)
        .closest(".pageWrap")
        .querySelector("footer");
      const disabledElms = document
        .querySelector(level2FvSel)
        .parentNode.parentNode.querySelectorAll(
          `& > *:not(.${commonFvSectionStyle.commonFvSection})`
        );
      tl.to([footer, disabledElms.length ? disabledElms : null], {
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
    } else {
      tl.fromTo(
        q("div"),
        {
          backgroundColor: "unset",
        },
        {
          backgroundColor: "#333",
          duration: 0.1,
          stagger: {
            amount: 0.3,
            from: "random",
            grid: [10, 10],
          },
        }
      );
    }
  };

  const onEntered = () => {
    const pageTransitionType = checkPageTransitionType(
      router.asPath,
      beforePath
    );
    const tl = gsap.timeline();

    // topページから第二階層ページに遷移するとき
    if (pageTransitionType === "top => level2") {
      tl.to(level2FvSel, { height: "auto" });
    }

    // 第二階層ページからtopページに遷移するとき
    else if (pageTransitionType === "level2 => top") {
      const clickSlug = beforePath.split("/")[1];
      const disableCards = document.querySelectorAll(
        `.${topPageStyle.sectionItem}:not(.u-${clickSlug})`
      );

      tl.to(disableCards, { opacity: 1 });
    } else {
      tl.fromTo(
        q("div"),
        {
          backgroundColor: "#333",
        },
        {
          backgroundColor: "unset",
          duration: 0.1,
          stagger: {
            amount: 0.3,
            from: "random",
            grid: [10, 10],
          },
        }
      );
    }

    setBeforePath(router.asPath);
    gsap.set([".pageAnim-enter-done", "body"], { clearProps: "all" });
  };

  const onExit = () => {
    gsap.set("body", { overflow: "hidden" });
    gsap.set(".pageAnim-exit", {
      height: "100vh",
      left: 0,
      overflow: "hidden",
      position: "fixed",
      top: 0,
      width: "100vw",
      zIndex: 2,
    });
  };

  const onExited = () => {
    gsap.set([".pageAnim-exit-done", "body"], { clearProps: "all" });
  };

  return (
    <>
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
          <div className="pageAnim">{children}</div>
        </CSSTransition>
      </TransitionGroup>
      <div className={s.pageTransitionGrid} ref={gridRef}>
        {/* create div 100 */}
        {Array.from(Array(100).keys()).map((i) => (
          <div key={`pageTransitionDiv_${i}`} />
        ))}
      </div>
    </>
  );
}
