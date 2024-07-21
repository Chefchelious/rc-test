import { ICONS } from './icons'
import dayjs from 'dayjs'

export const getStarIcon = (starIndex: number, rating: number) => {
  return starIndex <= rating ? ICONS.filledStarIcon : ICONS.emptyStarIcon
}

export const getMessageDate = (date: string) => {
  const today = dayjs().startOf('day')
  const yesterday = dayjs().subtract(1, 'day').startOf('day')
  const givenDate = dayjs(date).startOf('day')
  const givenYear = dayjs(date).year()
  const currentYear = dayjs().year()

  if (givenDate.isSame(today)) {
    return `сегодня ${dayjs(date).format('HH:mm')}`
  } else if (givenDate.isSame(yesterday)) {
    return `вчера ${dayjs(date).format('HH:mm')}`
  } else if (givenYear < currentYear) {
    return dayjs(date).format('DD.MM.YYYY HH:mm')
  } else {
    return dayjs(date).format('D MMMM')
  }
}
