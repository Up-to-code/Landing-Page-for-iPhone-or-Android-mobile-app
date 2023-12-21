import { Images } from "@/public/Images"
import Image from "next/image"

function Image_In_Hero() {
  return (
    <div className="w-full sm:w-1/2 flex justify-center">
      <Image src={Images.HeroImage} alt="Hero Image ">

      </Image>
    </div>
  )
}

export default Image_In_Hero