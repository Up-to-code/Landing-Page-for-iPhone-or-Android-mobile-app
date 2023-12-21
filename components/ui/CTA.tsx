import Image from "next/image"
import Max from "../layout/Max"
import { Images } from "@/public/Images"


function CTA() {
    return (
        <div>
            <Max>
                <div className="bg-[#F9FAFB] sm:flex-row rounded-md sm:px-24 pt-12  flex flex-wrap  justify-center sm:justify-start sm:flex-nowrap">
                    <div className="w-full max-w-52 sm:max-w-screen-lg sm:w-1/2 flex items-center flex-col gap-20">
                        <div>
                            <p className=" text-2xl sm:text-3xl sm:my-0 my-5">
                                Try new classes
                            </p>
                            <p>
                                This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold">
                                Learn More
                            </p>
                            <div className="flex g items-center ml-[-20px]">
                                <Image src={Images.GooglePlay} alt="Gooogle Play"></Image>
                                <Image src={Images.appleSore} alt="Gooogle Play"></Image>
                            </div>
                        </div>
                    </div>
                    <div className="flex sm:items-center">
                        <Image src={Images.Iphone} alt="" className="ml-[-30px] sm:ml-0 sm:mt-[-40px]" />
                    </div>

                </div>
            </Max>
        </div>
    )
}

export default CTA