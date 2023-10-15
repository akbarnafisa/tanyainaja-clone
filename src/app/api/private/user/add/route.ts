import { headers } from "next/headers";
import { NextResponse } from "next/server";

import {
  addUser,
  createSession,
  getSessionByUid,
  getUserByUid,
  updateSessionToken,
} from "@/lib/notion";

export async function POST(request: Request) {
  const res = await request.json();
  const headersInstance = headers();
  const token = headersInstance.get("Authorization");

  try {
    const userInNotion = await getUserByUid(res.uid);

    if (!token) {
      return NextResponse.json(
        { message: "Not Authenticated" },
        { status: 401 },
      );
    }

    const userSession = await getSessionByUid(res.uid);

    if (userSession.results.length > 0) {
      const sessionItem = userSession.results[0];
      if (sessionItem) {
        await updateSessionToken(sessionItem.id, token);
      } else {
        await createSession({
          token,
          uid: res?.uid,
        });
      }
    }

    if (userInNotion.results.length === 0) {
      await addUser(res);
      return NextResponse.json({ message: "New user added" });
    }

    return NextResponse.json(
      { message: "User is already exist" },
      { status: 400 },
    );
  } catch (error) {
    console.error(request.url, error);
    return NextResponse.json(
      { message: "Error while adding user" },
      { status: 500 },
    );
  }
}
