import { DetailedHTMLProps, InputHTMLAttributes } from "react"

type Params = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
export default function Input(params: Params) {
  return (
    <input {...params} className="p-2 rounded text-black border-2 border-black" />
  )
}
