import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import {
  DescriptionProfile,
  InfoProfile,
  ProfileContainer,
  TitleProfile,
} from './styles'
import { Link } from 'react-router-dom'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://avatars.githubusercontent.com/u/49878902?v=4" alt="" />
      <div>
        <TitleProfile>
          <h1>Murilo Lemes</h1>
          <Link
            to="https://github.com/murilolemes"
            target="_blank"
            title="Acesse o Github"
          >
            GITHUB <ArrowSquareOut size={12} weight="fill" />
          </Link>
        </TitleProfile>
        <DescriptionProfile>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </DescriptionProfile>
        <InfoProfile>
          <p>
            <GithubLogo size={18} /> murilolemes
          </p>
          <p>
            <Buildings size={18} /> Rocketseat
          </p>
          <p>
            <Users size={18} /> 32 seguidores
          </p>
        </InfoProfile>
      </div>
    </ProfileContainer>
  )
}
