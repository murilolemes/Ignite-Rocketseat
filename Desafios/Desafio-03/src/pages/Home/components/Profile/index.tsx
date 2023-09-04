import { Link } from 'react-router-dom'
import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'

import { IssuesContext } from '../../../../contexts/IssuesContext'

import {
  DescriptionProfile,
  InfoProfile,
  ProfileContainer,
  TitleProfile,
} from './styles'

export function Profile() {
  const user = useContextSelector(IssuesContext, (context) => {
    return context.user
  })

  if (!user) {
    return <ProfileContainer />
  }

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="" />
      <div>
        <TitleProfile>
          <h1>{user.name}</h1>
          <Link to={user.html_url} target="_blank" title="Acesse o Github">
            GITHUB <ArrowSquareOut size={12} weight="fill" />
          </Link>
        </TitleProfile>
        <DescriptionProfile>{user.bio}</DescriptionProfile>
        <InfoProfile>
          <p>
            <GithubLogo size={18} /> {user.login}
          </p>
          <p>
            <Buildings size={18} /> {user.company}
          </p>
          <p>
            <Users size={18} /> {user.followers_url.length} seguidores
          </p>
        </InfoProfile>
      </div>
    </ProfileContainer>
  )
}
