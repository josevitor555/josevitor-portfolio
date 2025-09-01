export default function Component() {
  return (
    <div className="bg-trasparent flex items-center rounded-full border p-2 shadow-sm">
      <div className="flex -space-x-1.5">
        <img
          className="ring-background rounded-full"
          src="https://randomuser.me/api/portraits/men/32.jpg"
          width={20}
          height={20}
          alt="Avatar 01"
        />
        <img
          className="ring-background rounded-full"
          src="https://randomuser.me/api/portraits/women/44.jpg"
          width={20}
          height={20}
          alt="Avatar 02"
        />
        <img
          className="ring-background rounded-full"
          src="https://randomuser.me/api/portraits/men/4.jpg"
          width={20}
          height={20}
          alt="Avatar 03"
        />
        <img
          className="ring-background rounded-full"
          src="https://randomuser.me/api/portraits/women/68.jpg"
          width={20}
          height={20}
          alt="Avatar 04"
        />
      </div>
      <p className="text-light-100 px-2 text-xs">
        Trusted by <strong className="text-light-300 font-medium">60K+</strong>{" "}
        developers.
      </p>
    </div>
  )
}
