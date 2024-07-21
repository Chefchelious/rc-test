import { ICONS } from './icons'

export const getStarIcon = (starIndex: number, rating: number) => {
  return starIndex <= rating ? ICONS.filledStarIcon : ICONS.emptyStarIcon
}
