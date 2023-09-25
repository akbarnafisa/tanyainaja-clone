import { Client } from '@notionhq/client'
import slugify from '@sindresorhus/slugify'
import { nanoid } from 'nanoid'

import {
  AddUserArgs,
  CreateSessionArgs,
  // SubmitQuestionArgs,
  // UpdateUserArgs,
  // UpdateUserCounterArgs,
} from './types'

const notion = new Client({
  auth: process.env.NOTION_SECRET,
})

const DB_USER = process.env.NOTION_DB_USERS_ID || ''
const DB_QUESTION = process.env.NOTION_DB_QUESTIONS_ID || ''
const DB_SESSION = process.env.NOTION_DB_SESSION_ID || ''


const submitRichTextProp = (fieldName: string, value: string) => {
  return {
    [fieldName]: {
      type: 'rich_text',
      rich_text: [
        {
          type: 'text',
          text: { content: value },
        },
      ],
    },
  }
}

const submitNumberProp = (fieldName: string, value: number) => {
  return {
    [fieldName]: {
      type: 'number',
      number: value || 0,
    },
  }
}

export const addUser = async (param: AddUserArgs) => {
  await notion.pages.create({
    parent: {
      database_id: DB_USER,
    },
    properties: {
      uid: {
        type: 'title',
        title: [
          {
            type: 'text',
            text: { content: param.uid },
          },
        ],
      },
      ...submitRichTextProp('name', param.name),
      ...submitRichTextProp('email', param.email),
      ...submitRichTextProp('slug', slugify(param.email.split('@')[0] || '')),
      ...submitRichTextProp('image', param.image),
      ...submitNumberProp('count', 0),
    },
  })
}

export const getUserByUid = async (uid: string) => {
  const response = await notion.databases.query({
    database_id: DB_USER,
    filter: {
      property: 'uid',
      title: {
        equals: uid,
      },
    },
  })

  return response
}

export const createSession = async (param: CreateSessionArgs) => {
  const response = await notion.pages.create({
    parent: {
      database_id: DB_SESSION,
    },
    properties: {
      uuid: {
        type: 'title',
        title: [
          {
            type: 'text',
            text: { content: nanoid() },
          },
        ],
      },
      ...submitRichTextProp('uid', param.uid),
      ...submitRichTextProp('token', param.token),
      expired: {
        type: 'date',
        date: {
          start: new Date(param.expire).toISOString(),
          time_zone: 'Asia/Jakarta',
        },
      },
    },
  })

  return response
}
