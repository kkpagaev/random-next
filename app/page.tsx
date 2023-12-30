import { prisma } from "../lib/db/prisma"
import Form from "./form"

export default async function Home() {
  const users = await prisma.user.findMany()

  return (
    <div>
      Hello world!
      {users.map((user) => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
      <Form />
    </div>
  )
}
