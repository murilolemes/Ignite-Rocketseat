import {
  ArrowSquareOut,
  Buildings,
  CaretLeft,
  GithubLogo,
  Users,
} from 'phosphor-react'
import { PostContainer, PostContent, PostInfo } from './styles'
import { Link } from 'react-router-dom'

export function Post() {
  return (
    <PostContainer>
      <PostInfo>
        <div className="links">
          <Link to={'/'}>
            <CaretLeft size={12} weight="bold" /> Voltar
          </Link>
          <Link
            to="https://github.com/murilolemes"
            target="_blank"
            title="Acesse o Github"
          >
            VER NO GITHUB
            <ArrowSquareOut size={12} weight="fill" />
          </Link>
        </div>
        <h1>JavaScript data types and data structures</h1>
        <div className="info">
          <p>
            <GithubLogo size={18} /> murilolemes
          </p>
          <p>
            <Buildings size={18} /> Rocketseat
          </p>
          <p>
            <Users size={18} /> 32 seguidores
          </p>
        </div>
      </PostInfo>

      <PostContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
          <br />
          <br />
          Dynamic typing <br />
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>

        <div>
          <p>
            <span>let</span> foo = 42; <span>//foo is now a number</span>
          </p>
          <p>
            foo = 'bar'; <span>//foo is now a number</span>
          </p>
          <p>
            foo = 'true'; <span>//foo is now a number</span>
          </p>
        </div>
      </PostContent>
    </PostContainer>
  )
}
