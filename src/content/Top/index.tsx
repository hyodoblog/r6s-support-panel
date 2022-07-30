import { R6SCard } from '~/components/R6SCard'

interface Team {
  title: string
  path: string
}

export const TopContent: React.FC = () => {
  const teams: Team[] = [
    {
      title: 'Crest Gaming Lst',
      path: 'CGL'
    }
  ]

  return (
    <>
      {teams.map((team) => (
        <R6SCard title={team.title} path={team.path} />
      ))}
    </>
  )
}
