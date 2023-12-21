import Max from "@/components/layout/Max"
import Cont from "./Cont"
import Image_In_Hero from "./Image_In_Hero"
function Hero() {
  return (
    <div className="flex justify-center">
      <Max className="px-0">
        <div className=" flex sm:h-screen h-max sm:max-h-[500px] items-center gap-3 m-auto py-16 flex-wrap sm:flex-nowrap">
          <Cont />
          <Image_In_Hero />
        </div>
      </Max>
    </div>
  )
}

export default Hero