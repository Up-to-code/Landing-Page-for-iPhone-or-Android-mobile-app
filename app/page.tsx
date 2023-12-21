import CTA from "@/components/ui/CTA"
import Clients from "@/components/ui/Clients/Clients"
import Features from "@/components/ui/Feature/Features"
import Footer from "@/components/ui/Footer/Footer"
import Headline from "@/components/ui/Headline/Headline"
import Hero from "@/components/ui/Hero/Hero"
import Brads from "@/components/ui/brands/Brads"

export default function Home() {
  return (
    <main>
      <Hero />
      <Brads/>
      <Features/>
      <Headline/>
      <Clients/>
      <CTA/>
      <Footer/>
    </main>
  )
}
