import {useEffect} from 'react'
import Link from 'next/link'

import useSWR from 'swr'

import Layout from '../components/Layout'
import NewsList from '../components/NewsList'
import {getAllNews} from '../libs/news'

const fetcher = (url) => fetch(url).then((res) => res.json())
const apiUrl = `${process.env.NEXT_PUBLIC_RESTAPI_URL}blog_app/list-news/`

export default function News({staticSortedPosts}) {
  const {data: newsPosts, mutate} = useSWR(
    apiUrl, fetcher, {fallbackData: staticSortedPosts}
  )
  const sortedPosts = newsPosts?.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  )
  useEffect(() => {mutate()}, [mutate])
  return (
    <Layout title='お知らせ一覧ページ | からだにやさしいサロン 琳 -RIN-'>
      <ul>
        {sortedPosts &&
          sortedPosts.map((post) => <NewsList key={post.id} news={post} />)}
      </ul>
      <Link href='/'>
        <div className='flex cursor-pointer mt-12 hover:bg-yellow-400'>
          <span>メインページに戻る</span>
        </div>
      </Link>
    </Layout>
  )
}

export async function getStaticProps() {
  const staticSortedPosts = await getAllNews()
  return {
    props: {
        staticSortedPosts
    },
    revalidate: 3,
  }
}