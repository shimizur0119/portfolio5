import s from './historyItem.module.scss'

type Props = {
  date: string
  title: string
}

export default function HistoryItem({ date, title }: Props) {
  return (
    <li className={s.historyItem}>
      <div className={s.dot}></div>
      <div className={s.bar}></div>
      <div className={s.wrap}>
        <div className={s.date}>{date}</div>
        <div className={s.title}>{title}</div>
      </div>
    </li>
  )
}
