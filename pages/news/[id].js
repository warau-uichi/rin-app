import Link from 'next/link'
import Layout from '../../components/Layout'
import { getAllNewsIds, getNewsData } from '../../libs/news'

export default function News({news}) {
  if (!news) {
    return (<Layout><div>Loading...</div></Layout>)
  }
  return (
    <Layout title={news.title}>
      <h1 className='px-5 py-5 bg-white text-cyan-400 mb-4 text-xl font-bold'>{news.title}</h1>
      <p className='mb-12'>{news.created_at}</p>
      <p className='px-10 py-10 border-t border-b border-white'>{news.desc}</p>
      <Link href='/news'>
        <div className='flex cursor-pointer mt-12 hover:bg-yellow-400'>
          <span>お知らせ一覧ページに戻る</span>
        </div>
      </Link>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = await getAllNewsIds();
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const news = await getNewsData(params.id);
  return {
    props: {
      news,
    },
    revalidate: 3,
  };
}