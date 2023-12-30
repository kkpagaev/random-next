"use client"
import { useForm } from "react-hook-form";
import { z } from "zod"
import { FormSchema } from "../lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

type Inputs = z.infer<typeof FormSchema>

export default function ZodForm() {
  const {
    register, handleSubmit, formState: { errors }
  } = useForm<Inputs>({
    resolver: zodResolver(FormSchema)
  })

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="flex gap-4 flex-col p-4">
        <h1>Form</h1>
        <div>
          <input placeholder="Name"
            {
            ...register("name")
            }
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <input placeholder="Email"
            type="email"
            {
            ...register("email")
            }
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <input placeholder="Password"
            type="password"
            {
            ...register("password")
            }
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <button type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}
