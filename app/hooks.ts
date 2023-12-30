"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

export function useFormAction<T extends z.AnyZodObject, U extends z.infer<T>>(schema: T,
  handler: SubmitHandler<U>
) {
  const form = useForm<U>({
    resolver: zodResolver(schema),
  })

  return {
    ...form,
    handleSubmit: form.handleSubmit(handler)
  }
}
