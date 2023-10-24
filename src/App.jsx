import styles from './App.module.css'

import '../src/global.module.css'
import { Board } from './components/Board'
import { Header } from './components/Header'

export function App() {

  return (
    <>
      <main className={styles.container}>
        <Header />

          <div className={styles.wrapper}>
            <div className={styles.contentCenter}>
            <Board />
            </div>
          </div>
      </main>
    </>
  )
}
