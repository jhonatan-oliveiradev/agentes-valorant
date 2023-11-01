import { Triangle } from '@phosphor-icons/react'
import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className={styles.header__container}>
      <div className={styles.header__content}>
        <Image
          src="/riot-games.svg"
          alt="Logotipo da Riot Games"
          width={52}
          height={26}
        />

        <span className={styles.separator} />
        <Image
          src="/valorant.svg"
          alt="Logotipo do Valorant"
          width={52}
          height={26}
        />

        <nav className={styles.nav}>
          <Link href="#">Game</Link>
          <Link href="#">Agents</Link>
          <Link href="#">News</Link>
          <Link href="#">Patch Notes</Link>
          <Link href="#">Store</Link>
          <Link href="#">Support</Link>
        </nav>

        <div>
          <picture>
            <Image src="/avatar.jpeg" alt="Avatar do usuário" layout="fill" />
          </picture>
          <strong>Twilight</strong>
          <Triangle size={8} weight="fill" />
        </div>
      </div>
    </header>
  )
}
