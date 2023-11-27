import React, { useState } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import tw from 'twin.macro'
import { DollarSign, Clock, ChevronLeft, ChevronRight } from 'react-feather'

import 'slick-carousel/slick/slick.css'

const Container = tw.div`relative mb-20`
const Content = tw.div`max-w-screen-xl mx-auto text-gray-500`

const SectionHeading = tw.h2`text-3xl sm:text-4xl tracking-wide text-center`
const Subheading = tw.h5`font-bold mb-4`

const PrimaryButton = tw.button`px-8 py-3 font-bold rounded bg-cyan text-gray-100 hocus:bg-cyan-500 hocus:text-gray-200 focus:outline focus:outline-none transition duration-300`

const TestimonialsContainer = tw.div`mt-0`
const Testimonials = styled.div``
const Testimonial = tw.div`max-w-md lg:max-w-none mx-auto lg:mx-0 flex flex-col items-center lg:items-stretch lg:flex-row`

const TestimonialImageSlider = tw(Slider)`w-full lg:w-5/12 flex-shrink-0 `
const TestimonialTextSlider = tw(Slider)``
const TestimonialText = tw.div`outline-none`

const ImageAndControlContainer = tw.div`relative outline-none`
const MenuImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-80 sm:h-96 lg:h-96`
])

const ControlContainer = tw.div`absolute bottom-0 right-0 bg-gray-100 px-6 py-4 rounded-tl-3xl border`;
const ControlButton = styled(PrimaryButton)`
  ${tw`mx-3 rounded-full text-gray-100 p-2`}
  svg {
    ${tw`w-5 h-5`}
  }
`

const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`

const TextContainer = styled.div(props => [
  tw`flex flex-col w-full lg:w-7/12`,
  props.textOnLeft ? tw`lg:pr-12 lg:order-first` : tw`lg:pl-12 lg:order-last`
])

const HeadingTitle = tw(SectionHeading)`lg:text-left leading-tight`
const Description = tw.p`text-base sm:text-sm tracking-wide leading-loose my-6`

const QuoteContainer = tw.div`flex mt-2 sm:mt-4`;
const Quote = tw.p`ml-2 text-sm font-semibold`;

export default function TwoColumnWithImageAndProfilePictureReview({
  subheading = "",
  heading = "台湾式足つぼマッサージ",
  description = "足の裏にある反射区を利用して、疲れたツボを刺激していきます。膝下までマッサージするのでむくみが気になる方にもオススメです。副交感神経を優位にする足湯付きです。",
  testimonials = null,
  textOnLeft = false
}){
  /*
   * You can modify the testimonials shown by modifying the array below or passing in the testimonials prop above
   * You can add or remove objects from the array as you need.
   */
  const defaultTestimonials = [
    {
      imageSrc:
        "/images/S__40288533.jpg",
      time_menues: [{
        time: "30分",
        price: "3,000円"
      },{
        time: "45分",
        price: "4,500円"
      },{
        time: "60分",
        price: "6,000円"
      }]
    }
  ];

  if (!testimonials || testimonials.length === 0) testimonials = defaultTestimonials;

  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [imageSliderRef, setImageSliderRef] = useState(null);
  const [textSliderRef, setTextSliderRef] = useState(null);

  return (
    <Container>
      <Content>
        <HeadingInfo tw="text-center lg:hidden" subheading={subheading} heading={heading} description={description} />
        <TestimonialsContainer>
          <Testimonials>
            <Testimonial>
              <TestimonialImageSlider arrows={false} ref={setImageSliderRef} asNavFor={textSliderRef} fade={true}>
                {testimonials.map((testimonial, index) => (
                  <ImageAndControlContainer key={index}>
                    <MenuImage imageSrc={testimonial.imageSrc} />
                    <ControlContainer>
                      <ControlButton onClick={imageSliderRef?.slickPrev}>
                        <ChevronLeft />
                      </ControlButton>
                      <ControlButton onClick={imageSliderRef?.slickNext}>
                        <ChevronRight />
                      </ControlButton>
                    </ControlContainer>
                  </ImageAndControlContainer>
                ))}
              </TestimonialImageSlider>
              <TextContainer textOnLeft={textOnLeft}>
                <HeadingInfo tw="hidden lg:block" subheading={subheading} heading={heading} description={description} />
                <TestimonialTextSlider arrows={false} ref={setTextSliderRef} asNavFor={imageSliderRef} fade={true}>
                  {testimonials.map((testimonial, index) => (
                      <TestimonialText key={index}>
                    {testimonial.time_menues.map((time_menu, index2) => (
                        <QuoteContainer key={index2}>
                          <IconWithText>
                            <IconContainer><Clock /></IconContainer>
                            <Quote>
                              {time_menu.time}
                            </Quote>
                          </IconWithText>
                          <IconWithText>
                            <IconContainer><DollarSign /></IconContainer>
                            <Quote>
                              {time_menu.price}
                            </Quote>
                          </IconWithText>
                        </QuoteContainer>
                    ))}
                     </TestimonialText>
                  ))}
                </TestimonialTextSlider>
              </TextContainer>
            </Testimonial>
          </Testimonials>
        </TestimonialsContainer>
      </Content>
    </Container>
  );
};

const HeadingInfo = ({ subheading, heading, description, ...props }) => (
  <div {...props}>
    {subheading ? <Subheading>{subheading}</Subheading> : null}
    <HeadingTitle>{heading}</HeadingTitle>
    <Description>{description}</Description>
  </div>
);
