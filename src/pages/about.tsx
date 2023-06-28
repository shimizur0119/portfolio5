import { useEffect, useRef } from 'react'
import classNames from 'classnames'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { DateTime } from 'luxon'
import { useRecoilValue } from 'recoil'
import Rellax from 'rellax'

import CommonFvSection from '@/components/CommonFvSection'
import CommonHead from '@/components/CommonHead'
import Footer from '@/components/Footer'
import HistoryItem from '@/components/HistoryItem'
import SimpleTitle from '@/components/SimpleTitle'
import TechnologiesList from '@/components/TechnologiesList'
import useElmRect from '@/hooks/useElmWidth'
import { darkModeState } from '@/states/atoms'
import { client } from '@/utils/contentful'

import s from './about.module.scss'

import type { GetStaticProps } from 'next'

gsap.registerPlugin(ScrollTrigger)

const calculateDuration = function (dateStr) {
  const currentDate = DateTime.local().startOf('day')
  const date = DateTime.fromISO(dateStr).startOf('day')
  const duration = currentDate.diff(date, ['years', 'months', 'days'])
  return duration.toObject()
}

type Props = {
  technologiesData: any
}

export default function About({ technologiesData }: Props) {
  const darkMode = useRecoilValue(darkModeState)
  const rellaxRef = useRef(null)
  const ageObj = calculateDuration('19950119')
  const ref = useRef(null)
  const rectRef = useRef(null)
  const q = gsap.utils.selector(ref)
  const rect = useElmRect(rectRef)

  useEffect(() => {
    if (!rect) return
    console.log(rect.width, rectRef.current.clientWidth)
    const rellax = new Rellax(rellaxRef.current, { center: true, speed: 3 })

    const ctx = gsap.context(() => {
      const pinSection = q(`.${s.historySection} .${s.inner}`)
      const pinTitle = q(`.${s.historySection} .${s.titleWrap}`)
      gsap.to(pinSection, {
        scrollTrigger: {
          end: () => `+=${rect.width - (window.innerWidth - 20) + 10}`,
          pin: true,
          scrub: true,
          start: 'top-=10px top',
          trigger: pinSection
        },
        x: -(rect.width - (window.innerWidth - 20))
      })
      gsap.to(pinSection, {
        scrollTrigger: {
          end: () => `+=${rect.width - (window.innerWidth - 20) + 10}`,
          pin: true,
          start: 'top-=100px top',
          trigger: pinTitle
        }
      })
    })

    return () => {
      ctx.revert()
      rellax.destroy()
    }
  }, [rect])

  return (
    <>
      <CommonHead
        description="Shimizu Ryota ポートフォリオサイト Aboutページです。"
        title="About"
      />
      <div className="pageWrap" ref={ref}>
        <main
          className={classNames(s.main, {
            [s['is-darkMode']]: darkMode
          })}>
          <CommonFvSection desc="こんな人です" title="About" />
          <div className={s.section}>
            <div className={s.inner}>
              <SimpleTitle desc="自己紹介" title="Self Introduction" />
              <div className={s.gridContainer}>
                <div className={s.imgWrap}>
                  <div className={s.imgBox}>
                    <img alt="" ref={rellaxRef} src="/img/personal.webp" />
                  </div>
                </div>
                <div className={s.contentWrap}>
                  <div className={s.textBox}>
                    東京でフロントエンドエンジニアとして働いています。
                    <br />
                    一児の父です。 Next.jsが好き。
                  </div>
                  <div className={s.infoBox}>
                    <div className={s.row}>
                      <div className={s.th}>名前</div>
                      <div className={s.td}>
                        <h2>清水 僚太</h2>
                      </div>
                    </div>
                    <div className={s.row}>
                      <div className={s.th}>職種</div>
                      <div className={s.td}>
                        <h2>フロントエンドエンジニア</h2>
                      </div>
                    </div>
                    <div className={s.row}>
                      <div className={s.th}>年齢</div>
                      <div className={s.td}>{ageObj.years}</div>
                    </div>
                    <div className={s.row}>
                      <div className={s.th}>所在地</div>
                      <div className={s.td}>東京都足立区</div>
                    </div>
                    <div className={s.row}>
                      <div className={s.th}>出身</div>
                      <div className={s.td}>愛知県豊川市</div>
                    </div>
                    <div className={s.row}>
                      <div className={s.th}>趣味</div>
                      <div className={s.td}>フットサル</div>
                    </div>
                    <div className={s.row}>
                      <div className={s.th}>メール</div>
                      <div className={s.td}>
                        otsukaresamannsatabasa@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={classNames(s.historySection)}>
            <div className={s.titleWrap}>
              <SimpleTitle desc="経歴" title="History" />
            </div>
            <div className={s.inner}>
              <div className={s.xScrollRect} ref={rectRef}>
                <div className={s.historyBox}>
                  <div className={s.content}>
                    <div className={s.historyListWrap}>
                      <div className={s.bar}></div>
                      <div className={s.now}>〜現在〜</div>
                      <ul className={s.historyList}>
                        <HistoryItem
                          date="1995年 1月"
                          title="愛知県豊川市で生まれる"
                        />
                        <HistoryItem date="1995年 1月" title="保育園に通う" />
                        <HistoryItem
                          date="1995年 1月"
                          title="小学校入学、サッカーを始める"
                        />
                        <HistoryItem
                          date="1995年 1月"
                          title="中学校入学、クラブチームに入る"
                        />
                        <HistoryItem
                          date="1995年 1月"
                          title="高校入学、サッカー部に入る"
                        />
                        <HistoryItem
                          date="1995年 1月"
                          title="高校卒業 サッカー引退"
                        />
                        <HistoryItem
                          date="1995年 1月"
                          title="名城大学法学部入学、フットサル部に入る"
                        />
                        <HistoryItem
                          date="1995年 1月"
                          title="大学の近くで一人暮らしを始める"
                        />
                        <HistoryItem
                          date="1995年 1月"
                          title="勉学を置き去りにしてアルバイトで生計を立てる"
                        />
                        <HistoryItem
                          date="1995年 1月"
                          title="なんとか単位を取り、大学を卒業する"
                        />
                        <HistoryItem
                          date="1995年 1月"
                          title="SIerに就職、営業職として働く"
                        />
                        <HistoryItem
                          date="1995年 1月"
                          title="転職してネットワークエンジニアになる"
                        />
                        <HistoryItem
                          date="1995年 1月"
                          title="希望を出して、webエンジニアになる"
                        />
                        <HistoryItem
                          date="1995年 1月"
                          title="奥さんと結婚する"
                        />
                        <HistoryItem
                          date="1995年 1月"
                          title="フロントエンドに特化したくて、GIGに入社する"
                        />
                        <HistoryItem date="1995年 1月" title="息子が生まれる" />
                        <HistoryItem
                          date="1995年 1月"
                          title="マネージャーに昇進"
                        />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={s.section}>
            <div className={s.inner}>
              <SimpleTitle
                desc="僕の好きな技術です"
                title="Favorite Technologies"
              />
              <TechnologiesList items={technologiesData.items} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await client.getEntries({
    content_type: 'technologies'
  })

  return {
    props: {
      technologiesData: res
    }
  }
}
