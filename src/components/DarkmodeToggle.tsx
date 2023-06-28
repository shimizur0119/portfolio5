import { useEffect } from 'react'
import classNames from 'classnames'
import { useRecoilState, useRecoilValue } from 'recoil'

import SvgIconMoon from '@/components/svg/SvgIconMoon'
import SvgIconSun from '@/components/svg/SvgIconSun'
import { darkModeState, sideMenuState } from '@/states/atoms'

import s from './darkmodeToggle.module.scss'

export default function DarkmodeToggle() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState)
  const sideMenuOpen = useRecoilValue(sideMenuState)

  useEffect(() => {
    const systemSettingDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    setDarkMode(systemSettingDarkMode)
  }, [])

  useEffect(() => {
    const body = document.querySelector('body')
    if (darkMode) {
      body.classList.add('is-dark')
    } else {
      body.classList.remove('is-dark')
    }
  }, [darkMode])

  const click = () => {
    console.log('DarkmodeToggle clicked')
    setDarkMode(!darkMode)
  }

  return (
    <button
      className={classNames(s.darkmodeToggle, {
        [`${s['is-dark']}`]: darkMode,
        [`${s['is-spShow']}`]: sideMenuOpen
      })}
      onClick={click}>
      <div className={s.inner}>
        <div className={classNames(s.icon, s['u-moon'])}>
          <SvgIconMoon />
        </div>
        <div className={classNames(s.icon, s['u-sun'])}>
          <SvgIconSun />
        </div>
      </div>
    </button>
  )
}
