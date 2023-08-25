import Link from 'next/link'

export default function BlogPostList({post}) {
  return (
    <li>
      <span>{post.id}</span>
      {' : '}
      <Link href={`/blogs/${post.id}`}>
        <span className='cursor-pointer text-white border-b border-white hover:bg-yellow-400'>
          {post.title}
        </span>
      </Link>
    </li>
  );
}