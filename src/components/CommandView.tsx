import { useCommandStore } from '../stores/CommandStore'

export default function CommandView() {
  const { command } = useCommandStore()

  return (
    <div className="flex text-center justify-center mt-4">
      <div className="font-extrabold p-4 rounded-xl border border-neutral-700">
        {command?.name}:
      </div>
      <div className="ml-4 flex items-center">
        <p className="italic">{command?.description}</p>
      </div>
    </div>
  )
}
