import { Cards } from './components/Cards'
import { Profile } from './components/Profile'
import { HomeContainer, Publications } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <Publications>
        <div className="titlePublications">
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>
        <form action="">
          <label htmlFor="">
            <input type="text" placeholder="Buscar conteúdo" />
          </label>
        </form>
        <Cards />
      </Publications>
    </HomeContainer>
  )
}
