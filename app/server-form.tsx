export default function ServerForm() {
  async function submit() {
    'use server';
    console.log("foo")
  }

  return (
    <form action={submit}>
      <button>Submit</button>
    </form>
  )
}
