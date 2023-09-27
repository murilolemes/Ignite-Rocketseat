import { useContextSelector } from 'use-context-selector'
import { Cards } from './components/Cards'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'

import { HomeContainer, Publications } from './styles'
import { IssuesContext } from '../../contexts/IssuesContext'

export function Home() {
  const issues = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })

  const issue = issues ? issues.length : 0
  const publicatinos = issue > 1 ? 'publicações' : 'publicação'

  return (
    <HomeContainer>
      <Profile />
      <Publications>
        <div className="titlePublications">
          <h2>Publicações</h2>
          <span>
            {issue} {publicatinos}
          </span>
        </div>
        <SearchForm />
        <Cards />
      </Publications>
    </HomeContainer>
  )
}
