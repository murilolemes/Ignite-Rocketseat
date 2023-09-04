import { Link } from 'react-router-dom'
import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
  Warning,
} from 'phosphor-react'

import { PostContainer, PostContent, PostInfo } from './styles'
import { useContextSelector } from 'use-context-selector'
import { IssuesContext } from '../../contexts/IssuesContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export function Post() {
  const issueContent = useContextSelector(IssuesContext, (context) => {
    return context.issueContent
  })

  if (!issueContent) {
    return (
      <PostContainer>
        <PostInfo>
          <div className="links">
            <Link to={'/'}>
              <CaretLeft size={12} weight="bold" /> Voltar
            </Link>
          </div>
          <h1>
            <Warning size={22} weight="fill" />
            Issue não encontrada
            <Warning size={22} weight="fill" />
          </h1>
        </PostInfo>
      </PostContainer>
    )
  }

  return (
    <PostContainer>
      <PostInfo>
        <div className="links">
          <Link to={'/'}>
            <CaretLeft size={12} weight="bold" /> Voltar
          </Link>
          <Link
            to={issueContent.html_url}
            target="_blank"
            title="Acesse o Github"
          >
            VER NO GITHUB
            <ArrowSquareOut size={12} weight="fill" />
          </Link>
        </div>
        <h1>{issueContent.title}</h1>
        <div className="info">
          <p>
            <GithubLogo size={18} />
            {issueContent.login}
          </p>
          <p>
            <CalendarBlank size={18} weight="fill" />
            {formatDistanceToNow(new Date(issueContent.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </p>
          <p>
            <ChatCircle size={18} weight="fill" />
            {issueContent.comments} comentarios
          </p>
        </div>
      </PostInfo>

      <PostContent>
        <ReactMarkdown>{issueContent.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
