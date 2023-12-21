import { StaticImageData } from "next/image"
import { Images } from "@/public/Images";
import Image from "next/image";

interface Props {
    Img: StaticImageData;
}
function Client({ Img }: Props) {
    return (
        <div className="flex flex-col gap-20 bg-[#FBF9F3] rounded max-w-64 px-7 py-2">
            <p className="font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <div className="flex gap-2 h-11">
                <Image src={Img} alt="" />
                <div className="flex flex-col">
                    <p className="text-zinc-800">
                        Full name
                    </p>
                    <span className="flex">
                        <Image src={Images.Star} alt="" />
                        <Image src={Images.Star} alt="" />
                        <Image src={Images.Star} alt="" />
                        <Image src={Images.Star} alt="" />
                        <Image src={Images.Star} alt="" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Client