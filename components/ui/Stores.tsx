import Image from "next/image"
import { Images } from "@/public/Images"
function Stores() {
  return (
    <div className="flex gap-3 items-center">
      <Image src={Images.GooglePlay} alt="Gooogle Play"></Image>
      <Image src={Images.appleSore} alt="Gooogle Play"></Image>
    </div>
  )
}

export default Stores