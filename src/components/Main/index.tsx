import Image from 'next/image'
import styles from './styles.module.scss'
import { Agent } from 'components/Agent'
import { AGENT } from 'utils/agent'

const Main = () => {
  return (
    <main className={styles.container}>
      <div className={styles.title}>
        <Image
          src="/background-logo.svg"
          width={140}
          height={99}
          alt="Logo de background do Valorant"
        />
        <h1>AGENTES</h1>
      </div>

      <div className={styles.agents}>
        <Agent agent={AGENT} />
      </div>
    </main>
  )
}

export default Main
