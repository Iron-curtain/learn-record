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

export interface ColunmProps {
  _id: string,
  title: string,
  avatar?: ImageProps,
  description: string
}

export interface PostProps {
  _id: string,
  title: string,
  excerpt?: string,
  content?: string,
  image?: ImageProps,
  createdAt: string,
  column: string
}

interface ImageProps {
  _id?: string,
  url?: string,
  createdAt?: string
}

interface ListProps<P> {
  [id: string]: P;
}

export interface GlobalDataProps {
  error: GlobalErrorProps,
  token: string,
  isLoading: boolean,
  columns: {
    data: ListProps<ColunmProps>,
    currentPage: number,
    total: number
  },
  posts: PostProps[],
  user: UserProps
}