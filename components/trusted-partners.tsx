import Image from "next/image"

export function TrustedPartners() {
  const partners = [
    { name: "Harvard", logo: "/partners/harvard.svg" },
    { name: "MIT", logo: "/partners/mit.svg" },
    { name: "Stanford", logo: "/partners/stanford.svg" },
    { name: "Yale", logo: "/partners/yale.svg" },
    { name: "Princeton", logo: "/partners/princeton.svg" },
    { name: "Columbia", logo: "/partners/columbia.svg" },
    { name: "Berkeley", logo: "/partners/berkeley.svg" },
    { name: "Oxford", logo: "/partners/oxford.svg" },
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
      {partners.map((partner) => (
        <div key={partner.name} className="flex items-center justify-center">
          <Image
            src={partner.logo || "/placeholder.svg"}
            alt={partner.name}
            width={80}
            height={40}
            className="h-12 w-auto grayscale transition-all hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  )
}
