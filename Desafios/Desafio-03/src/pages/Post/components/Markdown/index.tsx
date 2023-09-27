import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { MarkdownContainer } from './styles'

interface MarkdownProps {
  content: string
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <MarkdownContainer>
      <ReactMarkdown className="react-markdown" remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </MarkdownContainer>
  )
}
