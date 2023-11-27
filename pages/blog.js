import Link from 'next/link'

import tw from "twin.macro";

import Layout from '../components/Layout'
import BlogPostList from '../components/BlogPostList'
import {getAllBlogPosts} from '../libs/blog'

const BackToMain = tw.div`flex cursor-pointer mt-12 hover:bg-yellow-400`

export default function Blog({sortedPosts}) {
  return (
    <Layout title='ブログ記事一覧ページ | からだにやさしいサロン 琳 -RIN-'>
      <ul>
        {sortedPosts &&
          sortedPosts.map((post) => <BlogPostList key={post.id} post={post} />)}
      </ul>
      <Link href='/'>
        <BackToMain>
          <span>メインページに戻る</span>
        </BackToMain>
      </Link>
    </Layout>
  )
}

export async function getStaticProps() {
  const sortedPosts = await getAllBlogPosts()
  return {
    props: {
      sortedPosts
    },
    revalidate: 3,
  };
}