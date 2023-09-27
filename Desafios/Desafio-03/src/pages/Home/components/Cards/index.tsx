import { Link } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { IssuesContext } from '../../../../contexts/IssuesContext'

import { CardsContainer, DescriptionCard, HeaderCard } from './styles'

export function Cards() {
  const issues = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })

  const fetchUrlIssue = useContextSelector(IssuesContext, (context) => {
    return context.fetchIssueContent
  })

  function handleIssue(url: string) {
    fetchUrlIssue(url)
  }

  return (
    <CardsContainer>
      {issues?.map((issue) => {
        return (
          <Link
            to={'/post'}
            key={issue.number}
            onClick={() => handleIssue(issue.url)}
          >
            <HeaderCard>
              <h2>{issue.title}</h2>
              <p>
                {formatDistanceToNow(new Date(issue.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </p>
            </HeaderCard>
            <DescriptionCard>
              {issue.body !== null ? <p>{issue.body}</p> : ''}
            </DescriptionCard>
          </Link>
        )
      })}
    </CardsContainer>
  )
}
