export interface ICityData {
  mainImage: string
  title: string
  description: string
  gallery?: string[]
}

export type TUserRole = 'user' | 'admin'

export interface IUser {
  id: string
  profileImage: string
  name: string
  role: TUserRole
  specialization?: string
  rating?: number
}

export interface IReviewItem {
  id: string
  author: IUser
  review: string
  reviewImages: string[]
  comments: number
  likes: number
  createdAt: string
}
