import Link from 'next/link'
import Layout from '../../components/Layout'
import { getAllBlogPostIds, getBlogPostData } from '../../libs/blog'

export default function Post({post}) {
  if (!post) {
    return (<Layout><div>Loading...</div></Layout>)
  }
  return (
    <Layout title={post.title}>
      <h1 className='px-5 py-5 bg-white text-cyan-400 mb-4 text-xl font-bold'>{post.title}</h1>
      <p className='mb-12'>{post.created_at}</p>
      <p className='px-10 py-10 border-t border-b border-white'>{post.content}</p>
      <Link href='/blog'>
        <div className='flex cursor-pointer mt-12 hover:bg-yellow-400'>
          <span>ブログ記事一覧ページに戻る</span>
        </div>
      </Link>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = await getAllBlogPostIds();
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const post = await getBlogPostData(params.id);
  return {
    props: {
      post,
    },
    revalidate: 3,
  };
}