import { type FC } from 'react'
import { renderMarkdownContent } from '~/markdoc/utils'

type Props = {
  content: string
}

export const MarkdownRenderer: FC<Props> = ({ content }) => {
  return <div className="markdown-body">{renderMarkdownContent(content)}</div>
}
