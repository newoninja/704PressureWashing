import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import BlogPostPage from './BlogPostPage'
import NotFoundPage from '../NotFoundPage'
import { getLocationPosts } from '../../data/contentApi'
import useAsyncData from '../../hooks/useAsyncData'

export default function BlogPostRoutePage() {
  const { slug } = useParams()
  const { data: posts, loading } = useAsyncData(getLocationPosts, [])

  const post = useMemo(() => posts.find((item) => item.slug === slug), [posts, slug])

  if (loading) return null
  if (!post) return <NotFoundPage />

  return <BlogPostPage post={post} />
}
