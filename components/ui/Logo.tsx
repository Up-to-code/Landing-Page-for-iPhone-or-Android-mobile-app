import Image from "next/image"
import { Images } from "@/public/Images"
function Logo() {
  return (
    <div>
        <Image alt="Logo " src={Images.Logo}></Image>
    </div>
  )
}

export default Logo