import { Header } from "./components/Header"
import { Posts } from './components/Posts'
import { Sidebar } from "./components/Sidebar"

import styles from './app.module.css'
import './styles/global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Posts
            author='Murilo Lemes'
            content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi tempore, in nemo voluptatibus dolores eius repudiandae culpa molestiae vitae nisi amet quae repellat. Amet optio id maxime saepe, neque aliquam?'
          />
          <Posts
            author='Murilo Henrique'
            content='Um novo post muito legal'
          />
        </main>
      </div>
    </div>
  )
}
