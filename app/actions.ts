"use server"

import { drizzleDb } from "../lib/db/drizzle"
import { users } from "../lib/db/schema"
import {hash} from "bcrypt"
import { FormSchema } from "../lib/schemas"
import { z } from "zod"

export async function handleForm(state: any, formData: FormData) {
  console.log(state)
  console.log(formData)

  return {
    message: "OK"
  }
}

export async function handleAction(body: z.infer<typeof FormSchema>) {
  console.log(body)

  return {
    message: "hello from handleAction"
  }
}

export async function saveUser(body: z.infer<typeof FormSchema>) {
  const foo = FormSchema.safeParse(body)
  if (!foo.success) {
    console.log(foo.error)
    return {
      message: "Error"
    }
  }
  body = foo.data
  const user = await drizzleDb.insert(users).values({
    name: body.name,
    email: body.email,
    password: await hash(body.password, 10)
  }).returning({
      id: users.id
    })

  return user[0]
}
