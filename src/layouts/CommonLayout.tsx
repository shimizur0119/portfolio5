import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'

import Header from '@/components/Header'
import { initialState } from '@/states/atoms'

import s from './commonLayout.module.scss'

import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function CommonLayout({ children }: Props) {
  const router = useRouter()
  const setInitialState = useSetRecoilState(initialState)

  useEffect(() => {
    if (router.asPath !== '/') {
      setInitialState(false)
    }
  }, [])

  return (
    <div className={s.commonLayout}>
      <Header />
      {children}
    </div>
  )
}
