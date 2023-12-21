import Image from "next/image"
import { Images } from "@/public/Images"
import Max from "@/components/layout/Max"
import Cont from "./Cont"
function Headline() {
    return (

        <Max>
            <div className="flex px-20 py-6 items-center flex-wrap justify-center sm:justify-start flex-wrap-reverse gap-10 sm:gap-0 sm:flex-nowrap">
                <Image src={Images.placeholder} alt="any" className="sm:w-2/3 min-h-64 w-full "></Image>

                <Cont />
            </div>
        </Max>


    )
}

export default Headline