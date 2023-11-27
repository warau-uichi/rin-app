import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'
import { Zen_Old_Mincho } from 'next/font/google'

const zenOldMincho = Zen_Old_Mincho({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased text-white`,
    ...zenOldMincho.style,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles