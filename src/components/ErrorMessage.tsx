interface ErrorMessageProps {
  message: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex mt-4 text-center justify-center font-extrabold p-4 rounded-xl border border-red-900 text-red-700 bg-red-950">
      <div>
        <p>{message}</p>
      </div>
    </div>
  )
}
