import React, { useState } from 'react'
import Slider from 'react-slick'
import tw from 'twin.macro'
import styled from 'styled-components'
import { DollarSign, Clock, ChevronLeft, ChevronRight } from 'react-feather'

const Container = tw.div`relative`
const Content = tw.div`max-w-screen-xl mx-auto mb-12 text-gray-500`

const HeadingWithControl = tw.div`flex flex-wrap mb-2 justify-center sm:justify-normal sm:mb-0`
const Heading = tw.h2`text-4xl sm:text-5xl tracking-wide w-full`
const Paragraph = tw.p`text-base sm:text-sm tracking-wide leading-loose my-4 grow`
const headingdesc =  (
    <>
        サイマティクスセラピーとは、細胞の振動の乱れを音と振動で共鳴させて、
        <br />
        自然治癒力を活性化する音信療法です。
    </>
)
const Controls = tw.div`flex items-center`
const PrimaryButtonBase = tw.button`px-8 py-3 font-bold rounded bg-cyan text-white hocus:bg-cyan-500 hocus:text-gray-200 focus:outline focus:outline-none transition duration-300`
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``
const NextButton = tw(ControlButton)``

const CardSlider = styled(Slider)`
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-3xl sm:rounded-br-3xl relative focus:outline-none`
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-3xl`
])

const TextInfo = tw.div`sm:py-6 sm:px-10`
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`
const Title = tw.h5`text-xl font-bold`
const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`
const SecondaryInfoContainer = tw.div`flex mt-2 sm:mt-4`
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold`

export default function ThreeColMenu() {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null)
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  }

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: "/images/S__40288592.jpg",
      title: "サイマティクス美肌メニュー",
      description: "シミ・美白コースとニキビコースの2つをご用意しました。週1回の施術が理想的です。",
      locationText: "30分",
      pricingText: "3,000円",
    },
    {
      imageSrc: "/images/S__40288550.jpg",
      title: "美容鍼(全身+お顔の鍼)",
      description: "腕足頭に鍼を打ち、気を循環させながらお顔に鍼を打ちます。お悩みに合わせた鍼も可能。髪の毛よりも細い鍼を使用します。",
      locationText: "50分",
      pricingText: "5,500円",
    },
    {
      imageSrc: "/images/S__40288594.jpg",
      title: "炭酸パック+鎮静パック",
      description: "7万ppm炭酸パックで毛穴を引き締め、肌に艶を与えます。エピダームプラスパックで鎮静まで行います。",
      locationText: "50分",
      pricingText: "5,500円",
    },
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>サイマティクスセラピーと美容</Heading>
          <Paragraph>{headingdesc}</Paragraph>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeft/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRight/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <Clock />
                    </IconContainer>
                    <Text>{card.locationText}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <DollarSign />
                    </IconContainer>
                    <Text>{card.pricingText}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
            </Card>
          ))}
        </CardSlider>
        <Paragraph>上記3つのメニューをお好みで組み合わせて頂くと、合計金額から500円引きになります。</Paragraph>
      </Content>
    </Container>
  )
}
