import tw from 'twin.macro'
import styled from 'styled-components'

import Headers, { LogoLink, NavLink as NavLinkBase } from './headers/light.js'

const StyledHeader = styled(Headers)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`

const Container = tw.div`relative -mx-8 -mt-8 mb-8`
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-cyan`
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 pt-8`
const RightColumn = styled.div`
  background-image: url("/images/hero-img.jpg");
  ${tw`bg-green-500 bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1`}
`

const Content = tw.div`mt-10 lg:mb-10 flex flex-col sm:items-center lg:items-stretch`
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-sm lg:text-xs xl:text-sm leading-loose`

const Actions = styled.div`
  ${tw`mb-12 lg:mb-24`}
  .action {
    ${tw`text-center inline-block w-full sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-amber-300 text-white hover:bg-amber-400`}
  }
  .secondaryAction {
    ${tw`mt-4 sm:mt-0 sm:ml-4 bg-neutral-200 text-gray-700 hover:bg-neutral-400 hover:text-gray-800`}
  }
`

export default function Hero() {
  const heading = (
    <>
      琳 -rin-
      <wbr />
      <br />
      <span tw="text-xl">からだにやさしいサロン</span>
    </>
  ),
  description = "「琳」は、漢字の「王」が宝石・玉を、そして「林」が整えることを表しています。これらの意味から、「琳 -rin-」という名前には、あなたが玉のように滑らかで均整の取れた美しさを持ち続け、その美しさが内側から自然と放たれるように整えるという願いが込められています。私たちは、お客様一人一人を貴重な宝石のように大切にし、心からのケアでサポートいたします。お身体の美しさと心の健康を追求する場所、それが【琳 -rin-】です。至福の時間をお過ごしください。",
  primaryActionUrl = "https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000668420",
  primaryActionText = "予約する"
  return (
    <Container>
      <TwoColumn>
        <LeftColumn>
          <StyledHeader collapseBreakpointClass="sm" />
          <Content>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
              <a href={primaryActionUrl} target="_blank" rel="noopener noreferrer" className="action primaryAction">
                {primaryActionText}
              </a>
            </Actions>
          </Content>
        </LeftColumn>
        <RightColumn></RightColumn>
      </TwoColumn>
    </Container>
  )
}