import Link from "next/link"
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title='メインページ | からだにやさしいサロン 琳 -RIN-'>
      <div className='min-h-screen py-0 px-2 flex flex-col justify-center items-center'>
        <div>
          <Link href="/blog" className="bg-white mr-8  hover:bg-slate-300 text-cyan-400 px-4 py-12 rounded">
            ブログページ
          </Link>
          <Link href="/news" className="bg-white ml-8 hover:bg-slate-300 text-cyan-400 px-4 py-12 rounded">
            お知らせ
          </Link>
        </div>
      </div>
    </Layout>
  )
}
