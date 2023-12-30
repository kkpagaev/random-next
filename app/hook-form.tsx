"use client"
import { useForm } from "react-hook-form";

type Inputs = {
  name: string
  email: string
  password: string
}

export default function HookForm() {
  const {
    register, handleSubmit, formState: { errors }
  } = useForm<Inputs>()

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="flex gap-4 flex-col p-4">
        <h1>Form</h1>
        <div>
          <input placeholder="Name"
            {
            ...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters"
              }
            })
            }
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <input placeholder="Email"
            type="email"
            {
            ...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })
            }
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <input placeholder="Password"
            type="password"
            {
            ...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })
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
