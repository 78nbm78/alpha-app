import Image from "next/image"
import AkseMan from "@/public/images/my-image.jpg"

function HomePage() {
  return (
    <div className="h-screen bg-rose-950 text-white flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold mb-3">
        سلام به بچه های کلاس!
      </h1>
      <p>
        تمرین کنید! تمرین کنید! تمرین کنید!
      </p>
      <div className="relative w-[400px] h-[300px]">
        <Image
          src={AkseMan}
          alt="image"
          fill={true}
          // width={600}
          // height={400}
          className="mt-8"
        />
      </div>
    </div>
  )
}

export default HomePage