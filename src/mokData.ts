import type { ICityData, IReviewItem, IUser } from './types'
import barcelonaImg from '@/assets/images/barcelona_spain.jpg'
import profileImage from '@/assets/images/reviewer-photo.svg'
import galleryFirst from '@/assets/images/gallery-1.jpg'
import gallerySecond from '@/assets/images/gallery-2.jpg'
import galleryThird from '@/assets/images/gallery-3.jpg'
import adminPhoto from '@/assets/images/admin-photo.jpg'

export const CITY: ICityData = {
  title: 'Барселона — обзор города',
  mainImage: barcelonaImg,
  description:
    'Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди, многочисленными фестивалями и гастрономическим разнообразием понравилась мне в первый же день пребывания и стала местом, в котором...'
}

export const BARCELONAREVIEWS: IReviewItem[] = [
  {
    id: '23',
    author: {
      id: '1',
      profileImage: profileImage,
      name: 'Наталия Полянская',
      role: 'user'
    },
    review:
      'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...',
    reviewImages: [
      galleryFirst,
      gallerySecond,
      galleryThird,
      galleryThird,
      galleryThird,
      galleryThird
    ],
    comments: 9,
    likes: 9,
    createdAt: '2023-05-20T00:00:00Z'
  },
  {
    id: '24',
    author: {
      id: '2',
      profileImage: profileImage,
      name: 'Elena Bulgakova',
      role: 'user'
    },
    review:
      'Плюсы города: весь город одни плюсы! Минусы города: не видела. В наш марафон по Европе не вписалось 2 испанских города от усталости - решили остаток путешествия провести в Барселоне ...',
    reviewImages: [
      galleryFirst,
      gallerySecond,
      galleryThird,
      galleryThird,
      galleryThird,
      galleryThird,
      galleryThird
    ],
    comments: 12,
    likes: 15,
    createdAt: '2024-02-15T00:00:00Z'
  },
  {
    id: '25',
    author: {
      id: '3',
      profileImage: profileImage,
      name: 'Dmitrii Morrows',
      role: 'user'
    },
    review:
      'Плюсы города: весь город одни плюсы! Минусы города: не видела. В наш марафон по Европе не вписалось 2 испанских города от усталости - решили остаток путешествия провести в Барселоне ...',
    reviewImages: [galleryFirst, gallerySecond],
    comments: 12,
    likes: 10,
    createdAt: '2024-07-20T00:00:00Z'
  }
]

export const USER: IUser = {
  id: '2245',
  profileImage: profileImage,
  name: 'Наталия Полянская',
  role: 'user',
  specialization: 'Гид по Баварии, фотограф',
  rating: 4
}

export const ADMIN: IUser = {
  id: '777767',
  profileImage: adminPhoto,
  name: 'Администратор',
  role: 'admin',
  specialization: 'TravelAsk'
}
