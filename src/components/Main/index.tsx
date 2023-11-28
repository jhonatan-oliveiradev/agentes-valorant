import Image from 'next/image'

import { Agents } from 'components/Agents'

import styles from './styles.module.scss'

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
      <Agents />
    </main>
  )
}

export default Main
