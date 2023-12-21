import Max from "@/components/layout/Max"
import { Images } from "@/public/Images"
import Image from "next/image"

function Footer() {
    return (
        <div className="my-8">
            <Max>
                <div className="px-6 sm:px-0 sm:h-36 flex justify-between flex-wrap sm:flex-nowrap gap-10">
                    <div className="flex flex-col justify-between h-full gap-7 sm:gap-0">
                        <Image src={Images.Logo} alt=""></Image>
                        <div>
                            <p className="text-[#A4A4A4] py-2">
                                Susbcribe to our newsletter
                            </p>
                            <div className="relative w-max">
                                <input type="text" placeholder="Enter your email" className="outline-none px-2 py-1 bg-zinc-200 rounded-md" />
                                <p className="absolute top-[7px] right-2 text-red-500 text-sm">
                                    Send
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between sm:items-end">
                        <div className="flex text-2xl gap-3 ">
                            <Image src={Images.Footer.Discord} alt="" ></Image>
                            <Image src={Images.Footer.Facebook} alt=""></Image>
                            <Image src={Images.Footer.Dribbble} alt=""></Image>
                            <Image src={Images.Footer.Behance} alt="" className="w-11"></Image>
                        </div>
                        <div className="flex gap-3 font-semibold mt-10 sm:mt-0">
                            <p>
                                Privacy policy
                            </p>
                            <p>
                                Cookies policy
                            </p>
                            <p>
                                © Trainers 2022
                            </p>
                        </div>
                    </div>



                </div>
            </Max>
        </div>
    )
}

export default Footer