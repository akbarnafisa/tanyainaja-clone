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