import Image from "next/image"
import { Images } from "@/public/Images"
import Max from "@/components/layout/Max"
function Brads() {
    return (
        <Max>
            <div className="py-4 px-16 flex gap-10 justify-center flex-wrap">
                <Image src={Images.apple} alt="apple" ></Image>
                <Image src={Images.Nike} alt="Nike"></Image>
                <Image src={Images.Samsung} alt="Samsung"  ></Image>
                <Image src={Images.goole} alt="goole"></Image>
                <Image src={Images.Adidas} alt="Adidas"></Image>
                <Image src={Images.Amazon} alt="Amazon"></Image>
            </div>
        </Max>

    )
}

export default Brads