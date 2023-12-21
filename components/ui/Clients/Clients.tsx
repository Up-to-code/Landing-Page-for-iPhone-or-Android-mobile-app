import Max from "@/components/layout/Max"
import { Images } from "@/public/Images"
import Client from "./Client"

function Clients() {
    return (
        <div className="my-9">
            <Max>
                <div className="text-3xl text-text font-semibold text-center py-8">
                Clients
                </div>
                <div className="flex flex- sm:justify-between gap-5 flex-wrap sm:flex-nowrap justify-center ">
                    <Client Img={Images.clientImage} />
                    <Client Img={Images.clientImage2} />
                    <Client Img={Images.clientImage3} />
                </div>
            </Max>
        </div>
    )
}

export default Clients