import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'

interface AgentProps {
  agent: {
    displayName: string
    role: {
      displayName: string
    }
    abilities: {
      displayName: string
      displayIcon: string
    }[]
  }
}

export const Agent = ({ agent }: AgentProps) => {
  return (
    <Link href="#" className={styles.agent}>
      <div>
        <p>{agent.role.displayName}</p>
        <strong>{agent.displayName}</strong>
      </div>

      <ul>
        {agent.abilities.map(ability => (
          <li key={ability.displayName}>
            <Image
              src={ability.displayIcon}
              width={36}
              height={36}
              alt={'Icone da habilidade ' + ability.displayName}
            />
          </li>
        ))}
      </ul>
    </Link>
  )
}
