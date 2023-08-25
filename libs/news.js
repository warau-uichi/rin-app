export async function getAllNews() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}blog_app/list-news/`)
  )
  const newsPosts = await res.json();
  const sortedPosts = newsPosts.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  )
  return sortedPosts;
}

export async function getAllNewsIds() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}blog_app/list-news/`)
  )
  const newsPosts = await res.json()
  return newsPosts.map((news) => {
    return {
      params: {
        id: String(news.id),
      },
    }
  })
}

export async function getNewsData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}blog_app/detail-news/${id}/`)
  )
  const news = await res.json()
  return news
}