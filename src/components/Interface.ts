import type { Dispatch, SetStateAction } from "react"

export interface CommandInputProps {
  inputValue: string
  callbackFunction: Dispatch<SetStateAction<string>>
}
