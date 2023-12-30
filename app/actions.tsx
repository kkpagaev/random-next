"use server"

export async function handleForm(state: any, formData: FormData) {
  console.log(state)
  console.log(formData)

  return {
    message: "OK"
  }
}
