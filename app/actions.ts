"use server"

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
