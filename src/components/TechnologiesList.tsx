import classNames from 'classnames'
import { useRecoilValue } from 'recoil'

import { darkModeState } from '@/states/atoms'

import s from './technologiesList.module.scss'

type Props = {
  items: any
}

export default function TechnologiesList({ items }: Props) {
  const darkMode = useRecoilValue(darkModeState)
  return (
    <ul
      className={classNames(s.technologiesList, {
        [s['is-darkMode']]: darkMode
      })}>
      {items &&
        items.map((item, i) => {
          return (
            <li className={s.item} key={`technologiesList_${i}`}>
              <div className={s.inner}>
                <div className={s.logo}>
                  <img alt="" src={item.fields.logo.fields.file.url} />
                </div>
                <div className={s.content}>
                  <div className={s.row}>
                    <div className={s.th}>名称</div>
                    <div className={s.td}>{item.fields.name}</div>
                  </div>
                  <div className={s.row}>
                    <div className={s.th}>習熟度</div>
                    <div className={s.td}>
                      {Array.from(Array(item.fields.star).keys())
                        .map(() => '⭐️')
                        .join('')}
                    </div>
                  </div>
                  <div className={s.row}>
                    <div className={s.th}>経験年数</div>
                    <div className={s.td}>{item.fields.yearsOfExperience}</div>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
    </ul>
  )
}
