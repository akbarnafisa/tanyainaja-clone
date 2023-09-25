export interface AddUserArgs {
  uid: string
  name: string
  email: string
  image: string
}

export interface CreateSessionArgs {
  uid: string
  token: string
  expire: string
}

export interface UserProfile {
  uid: string
  image: string
  name: string
  slug: string
  count: number
  public: boolean
}

export interface UpdateUserCounterArgs {
  pageId: string
  count: number
}

export interface SubmitQuestionArgs {
  uid: string
  question: string
}
