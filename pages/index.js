import Link from "next/link"
import Layout from '@/components/Layout'
import AnimationReveal from '@/components/AnimationReveal'
import Hero from '@/components/Hero'
import ThreeColMenu from '@/components/ThreeColMenues'
import ThreeColMenu2 from '@/components/ThreeColMenues2'
import TwoColumnWithImageAndProfilePictureReview from "@/components/TwoColumnWithImageAndProfilePictureReview"
import TwoColumnWithImageAndProfilePictureReview2 from "@/components/TwoColumnWithImageAndProfilePictureReview2"
import TwoColumnWithImageAndProfilePictureReview3 from "@/components/TwoColumnWithImageAndProfilePictureReview3"
import Maps from "@/components/Maps"

export default function Home() {
  return (
    <Layout>
      <AnimationReveal>
        <Hero />
        <ThreeColMenu />
        <ThreeColMenu2 />
        <TwoColumnWithImageAndProfilePictureReview textOnLeft={true} />
        <TwoColumnWithImageAndProfilePictureReview2 textOnLeft={false} />
        <TwoColumnWithImageAndProfilePictureReview3 textOnLeft={true} />
        <Maps />
      </AnimationReveal>
    </Layout>
  )
}
