import { User } from 'firebase/auth'

import { UserProfile } from './types'

export const BASEURL = `${process.env.NEXT_PUBLIC_BASE_URL}`

export const postAddUser = async (user: User): Promise<{ message: string }> => {
  const token = await user.getIdToken()

  const rawRes = await fetch(`${BASEURL}/api/private/user/add`, {
    method: 'POST',
    body: JSON.stringify({
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })

  return rawRes.json()
}

export const destroyActiveSession = async (
  user: User,
): Promise<{ message: string }> => {
  const token = await user.getIdToken()

  const rawRes = await fetch(`${BASEURL}/api/private/user/session-destroy`, {
    method: 'DELETE',
    body: JSON.stringify({
      uid: user.uid,
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })

  return rawRes.json()
}


export const getAllPublicUsers = async (): Promise<{ data: UserProfile[] }> => {
  const rawRes = await fetch(`${BASEURL}/api/user/public-list`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      // TODO: try to comment it later
      tags: ['public-users'],
    },
  })

  return rawRes.json()
}
