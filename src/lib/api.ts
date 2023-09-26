import { User } from 'firebase/auth'

import { Question, UserProfile } from './types'

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

export const getPublicOwnerUser = async (
  slug: string,
): Promise<{ data: UserProfile }> => {
  const rawRes = await fetch(`${BASEURL}/api/user/by-slug/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      tags: ['user-by-slug', slug],
    },
  })

  return rawRes.json()
}

export const patchHit = async (slug: string): Promise<{ message: string }> => {
  const rawRes = await fetch(`${BASEURL}/api/tracker/hit/${slug}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return rawRes.json()
}

export const postSendQuestion = async (
  slug: string,
  question: string,
): Promise<{ message: string }> => {
  const rawRes = await fetch(`${BASEURL}/api/question/submit`, {
    method: 'POST',
    body: JSON.stringify({
      slug: slug,
      question: question,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return rawRes.json()
}

export const getQuestionDetail = async (
  uuid: string,
): Promise<{ data: Question[] }> => {
  const rawRes = await fetch(`${BASEURL}/api/question/detail/${uuid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      tags: ['q-by-uuid', uuid],
    },
  })

  return rawRes.json()
}
export const getExistingUser = async (
  user: User,
): Promise<{ data: UserProfile }> => {
  const token = await user.getIdToken()

  const rawRes = await fetch(
    `${BASEURL}/api/private/user/by-uuid/${user.uid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      next: {
        tags: ['user-by-uuid', user.uid],
      },
    },
  )

  return rawRes.json()
}
