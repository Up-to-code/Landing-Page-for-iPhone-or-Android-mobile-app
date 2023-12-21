import Max from "@/components/layout/Max"
import Feature from "./Feature"
import { Images } from "@/public/Images"
function Features() {
  return (
    <Max>
      <div className="flex flex-wrap gap-12 py-16 px-28">
        <Feature Img={Images.Feature1}/>
        <Feature Img={Images.Feature2}/>
        <Feature Img={Images.Feature3}/>
        <Feature Img={Images.Feature4}/>
      </div>
    </Max>
  )
}

export default Features