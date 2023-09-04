import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'

interface MarkdownProps {
  issueMarkdown: string
}

export function Markdown(issueMarkDown: MarkdownProps) {
  ReactDom.render(
    <ReactMarkdown>{issueMarkDown.issueMarkdown}</ReactMarkdown>,
    document.body,
  )
}
