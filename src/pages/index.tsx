import { useEffect, useRef } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { useRecoilState, useRecoilValue } from 'recoil'

import CommonHead from '@/components/CommonHead'
import Footer from '@/components/Footer'
import StrEachSpanWrap from '@/components/StrEachSpanWrap'
import { darkModeState, initialState } from '@/states/atoms'
import oswald from '@/styles/fonts/oswald'
import topPageInitialAnim from '@/utils/topPageInitialAnim'

import s from './index.module.scss'

type SectionItemProps = {
  addClassNames: string[]
  desc: string
  href?: string
  title: string
}

const SectionItem = ({
  title,
  desc,
  href,
  addClassNames
}: SectionItemProps) => {
  return (
    <Link className={classNames(s.sectionItem, ...addClassNames)} href={href}>
      <h2 className={classNames(s.title, oswald.className)}>{title}</h2>
      <div className={s.desc}>{desc}</div>
    </Link>
  )
}

export default function Top() {
  const [initial, setInitial] = useRecoilState(initialState)
  const darkMode = useRecoilValue(darkModeState)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!initial) return
    topPageInitialAnim(ref)
    setInitial(false)
  }, [])

  return (
    <>
      <CommonHead description="Ryota Shimizu のポートフォリオサイトです。" />
      <div className="pageWrap">
        <main
          className={classNames(s.main, { [s['is-darkMode']]: darkMode })}
          ref={ref}>
          <div className={s.fvSection}>
            <div className={s.inner}>
              <h1 className={classNames(s.mainText, oswald.className)}>
                <div className={s.row}>
                  <StrEachSpanWrap str="Ryota" />
                </div>
                <div className={s.row}>
                  <StrEachSpanWrap str="Shimizu" />
                </div>
              </h1>
            </div>
          </div>
          <div className={s.sections}>
            <div className={s.sectionsRow}>
              <SectionItem
                addClassNames={['u-work']}
                desc="こんな仕事してます"
                href="/work"
                title="Work"
              />
              <SectionItem
                addClassNames={['u-about']}
                desc="こんな人です"
                href="/about"
                title="About"
              />
            </div>
            <div className={s.sectionsRow}>
              <SectionItem
                addClassNames={['u-blog']}
                desc="ブログ書いてます"
                href="/blog"
                title="Blog"
              />
              <SectionItem
                addClassNames={['u-contact']}
                desc="お問い合わせはこちら"
                href="/contact"
                title="Contact"
              />
              <SectionItem
                addClassNames={['u-other']}
                desc="その他"
                href="/other"
                title="Other"
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
