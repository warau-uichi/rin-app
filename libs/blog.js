export async function getAllBlogPosts() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}blog_app/list-blog/`)
  )
  const posts = await res.json();
  const sortedPosts = posts.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  )
  return sortedPosts;
}

export async function getAllBlogPostIds() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}blog_app/list-blog/`)
  )
  const posts = await res.json()
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    }
  })
}

export async function getBlogPostData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}blog_app/detail-blog/${id}/`)
  )
  const post = await res.json()
  return post
}