import Image, { StaticImageData } from "next/image"
import { Images } from "@/public/Images"
interface Props  {
    Img:StaticImageData
}
function Feature({Img}:Props) {
    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <Image src={Img} alt="Feature" />
            <p className="text-3xl">Feature</p>
            <p className="text-sm max-w-60 text-center">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            <Image src={Images.More} alt="" className="cursor-pointer"></Image>
        </div>
    )
}

export default Feature