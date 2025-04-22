import Image from "next/image"

interface SchoolLevelCardProps {
  icon: string
  title: string
  description: string
}

export function SchoolLevelCard({ icon, title, description }: SchoolLevelCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#02342E]/10">
        <Image src={icon || "/placeholder.svg"} alt={title} width={24} height={24} />
      </div>
      <h3 className="mb-2 text-lg font-bold text-[#02342E]">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
