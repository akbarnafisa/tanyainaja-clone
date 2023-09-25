import { User } from 'firebase/auth'

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
