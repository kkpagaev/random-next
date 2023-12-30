import { prisma } from "../lib/db/prisma"
import ZodForm from "./zod-form"
// import ServerForm from "./server-form"
// import Form from "./form"

export default async function Home() {
  const users = await prisma.user.findMany()

  return (
    <div>
      <ZodForm />
      {/*<ServerForm />*/}
      <br />
      Hello world!
      {users.map((user) => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
       {/*<Form />*/}
    </div>
  )
}
