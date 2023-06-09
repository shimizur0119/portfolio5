import { useEffect, useRef } from 'react'
import classNames from 'classnames'
import gsap from 'gsap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRecoilState, useRecoilValue } from 'recoil'

import { darkModeState, initialState, sideMenuState } from '@/states/atoms'
import oswald from '@/styles/fonts/oswald'

import s from './sideMenu.module.scss'

export default function SideMenu() {
  const darkMode = useRecoilValue(darkModeState)
  const router = useRouter()
  const initial = useRecoilValue(initialState)
  const [sideMenuOpen, setSideMenuOpen] = useRecoilState(sideMenuState)
  const ref = useRef(null)
  const q = gsap.utils.selector(ref)

  const menuOpen = () => {
    const tl = gsap.timeline()
    tl.fromTo(
      q(`.${s.bg}`),
      {
        backdropFilter: 'blur(0px)',
        backgroundColor: 'rgba(51, 51, 51, 0)'
      },
      {
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(51, 51, 51, 0.7)',
        pointerEvents: 'all'
      }
    ).fromTo(
      q(`.${s.box}`),
      {
        x: '100%'
      },
      {
        duration: 0.3,
        x: '0%'
      },
      '<'
    )
  }

  const menuClose = () => {
    const tl = gsap.timeline()
    tl.fromTo(
      q(`.${s.bg}`),
      {
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(51, 51, 51, 0.7)'
      },
      {
        backdropFilter: 'blur(0px)',
        backgroundColor: 'rgba(51, 51, 51, 0)',
        pointerEvents: 'none'
      }
    ).fromTo(
      q(`.${s.box}`),
      {
        x: '0%'
      },
      {
        duration: 0.3,
        x: '100%'
      },
      '<'
    )
  }

  const bgClick = () => {
    setSideMenuOpen(false)
  }

  useEffect(() => {
    if (initial) return

    if (sideMenuOpen) {
      menuOpen()
    } else {
      menuClose()
    }
  }, [sideMenuOpen])

  useEffect(() => {
    if (sideMenuOpen) {
      setSideMenuOpen(false)
    }
  }, [router.asPath])

  return (
    <div
      className={classNames(s.sideMenu, { [s['is-darkMode']]: darkMode })}
      ref={ref}>
      <div className={s.bg} onClick={bgClick}></div>
      <div className={s.box}>
        <ul className={classNames(s.linkList, oswald.className)}>
          <li className={s.linkItem}>
            <Link href="/">Top</Link>
          </li>
          <li className={s.linkItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={s.linkItem}>
            <Link href="/work">Work</Link>
          </li>
          <li className={s.linkItem}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={s.linkItem}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={s.linkItem}>
            <Link href="/other">Other</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
