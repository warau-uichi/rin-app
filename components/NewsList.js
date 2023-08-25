import Link from 'next/link'

export default function NewsList({news}) {
  return (
    <li>
      <span>{news.id}</span>
      {' : '}
      <Link href={`/news/${news.id}`}>
        <span className='cursor-pointer text-white border-b border-white hover:bg-yellow-400'>
          {news.title}
        </span>
      </Link>
    </li>
  );
}