import Head from 'next/head'
import Image from 'next/image'
import { Noto_Sans_JP } from 'next/font/google'
import localImage from '../public/S__40288614.jpg'

const notoSansJp = Noto_Sans_JP({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Layout({children, title='title here'}) {
  return (
    <div className={`flex justify-center items-center flex-col min-h-screen text-white font-mono bg-cyan-400  ${notoSansJp.className}`}>
      <Head>
        <title>{title}</title>
      </Head>
      <header className='flex justify-center items-center'>
        <Image src={localImage} alt='RIN' width='150' className='rounded-full' />
      </header>
      <main className='flex flex-1 justify-center items-center w-screen flex-col'>
        {children}
      </main>
      <footer className='w-full h-6 flex justify-center items-center text-white text-sm'>
        @RIN 2023
      </footer>
    </div>
  );
}