import { type NextPage } from 'next'
import { useCallback } from 'react'
import { useGetPostQuery } from '~/generated/graphql'
import { useRouter } from 'next/router'
import { EditPost } from '~/features/edit-post/pages/EditPost'

const Edit: NextPage = () => {
  const router = useRouter()
  const { postId } = router.query
  const [queryResult] = useGetPostQuery({ variables: { id: postId as string } })
  const { data, fetching } = queryResult

  const onAfterSubmit = useCallback(async () => {
    await router.push('/posts')
  }, [router])

  if (fetching) {
    return null
  }

  return (
    <EditPost
      isNew={false}
      initialPost={data?.post}
      backUrl="/posts"
      onAfterSubmit={onAfterSubmit}
    />
  )
}

export default Edit
