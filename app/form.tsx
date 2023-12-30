"use client"
import { useFormState, useFormStatus } from "react-dom"
import Input from "./input"
import { handleForm } from "./actions"

function Button() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" aria-disabled={pending}>
      Submit
    </button>
  )
}

export default function Form() {
  const [state, formAction] = useFormState(handleForm, {
    message: ""
  })

  return (
    <form action={formAction}>
      <div className="flex gap-4 flex-col p-4">
        <h1>Form</h1>
        <div>
          <Input name="name" type="text" placeholder="Name" required />
        </div>
        <div>
          <Input name="email" type="email" placeholder="Email" required />
        </div>
        <div>
          <Input name="password" type="password" placeholder="Password" required />
        </div>
        <div>
          <Button />
        </div>
      </div>
      {
        state.message
      }
    </form>
  )
}
