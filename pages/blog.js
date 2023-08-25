import Link from 'next/link'
import Layout from '../components/Layout'
import BlogPostList from '../components/BlogPostList'
import {getAllBlogPosts} from '../libs/blog'

export default function Blog({sortedPosts}) {
  return (
    <Layout title='ブログ記事一覧ページ | からだにやさしいサロン 琳 -RIN-'>
      <ul>
        {sortedPosts &&
          sortedPosts.map((post) => <BlogPostList key={post.id} post={post} />)}
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
  const sortedPosts = await getAllBlogPosts()
  return {
    props: {
      sortedPosts
    },
    revalidate: 3,
  };
}