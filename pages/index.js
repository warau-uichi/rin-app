import Link from "next/link"
import Layout from '@/components/Layout'
import AnimationReveal from '@/components/AnimationReveal'
import Hero from '@/components/Hero'
import ThreeColMenu from '@/components/ThreeColMenues'
import TwoColumnWithImageAndProfilePictureReview from "@/components/TwoColumnWithImageAndProfilePictureReview"
import TwoColumnWithImageAndProfilePictureReview2 from "@/components/TwoColumnWithImageAndProfilePictureReview2"
import TwoColumnWithImageAndProfilePictureReview3 from "@/components/TwoColumnWithImageAndProfilePictureReview3"
import TwoColumnWithImageAndProfilePictureReview4 from "@/components/TwoColumnWithImageAndProfilePictureReview4"
import Maps from "@/components/Maps"

export default function Home() {
  return (
    <Layout title='メインページ | からだにやさしいサロン 琳 -RIN-'>
      <AnimationReveal>
        <Hero />
        <ThreeColMenu />
        <TwoColumnWithImageAndProfilePictureReview textOnLeft={true} />
        <TwoColumnWithImageAndProfilePictureReview2 textOnLeft={false} />
        <TwoColumnWithImageAndProfilePictureReview3 textOnLeft={true} />
        <TwoColumnWithImageAndProfilePictureReview4 textOnLeft={false} />
        <Maps />
      </AnimationReveal>
    </Layout>
  )
}
