import { drizzleDb } from "../lib/db/drizzle"
import { prisma } from "../lib/db/prisma"
import ZodForm from "./zod-form"
import ZodFormAction from "./zod-form-action"
// import ServerForm from "./server-form"
// import Form from "./form"

export default async function Home() {
  // const users = await prisma.user.findMany()
  const users = await drizzleDb.query.users.findMany()

  return (
    <div>
      <ZodFormAction />
      {/*<ServerForm />*/}
      <br />
      Hello world!
      {users.map((user) => (
        <div key={user.id}>
          {user.fullName}
        </div>
      ))}
       {/*<Form />*/}
    </div>
  )
}
