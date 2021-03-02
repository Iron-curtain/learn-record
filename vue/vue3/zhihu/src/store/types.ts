export interface UserProps {
  isLogin: boolean,
  nickName?: string,
  _id?: number,
  column?: number,
  email?: number
}

export interface GlobalErrorProps {
  status: boolean,
  message?: string
}

export interface ColumnProps {
  _id: string,
  title: string,
  avatar?: ImagePropsType,
  description: string
}

export interface PostProps {
  _id: string,
  title: string,
  excerpt?: string,
  content?: string,
  image?: ImagePropsType,
  createdAt: string,
  column: string
}

interface ImagePropsType {
  _id?: string,
  url?: string,
  createdAt?: string
}

export interface GlobalDataProps {
  error: GlobalErrorProps,
  token: string,
  isLoading: boolean,
  columns: ColumnProps[],
  posts: PostProps[],
  user: UserProps
}