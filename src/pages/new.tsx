import { type NextPage } from 'next'
import { EditPost } from '~/features/edit-post/pages/EditPost'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

const New: NextPage = () => {
  const router = useRouter()
  const onAfterSubmit = useCallback(async () => {
    await router.push('/posts')
  }, [router])

  return <EditPost isNew backUrl="/posts" onAfterSubmit={onAfterSubmit} />
}

export default New
