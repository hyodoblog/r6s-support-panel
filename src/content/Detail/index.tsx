import { Grid } from '@mui/material'

import { R6SCard } from '~/components/R6SCard'
import type { Team } from '~/data/team'

import { HomeButton } from './HomeButton'

interface Props {
  team: Team
}

export const DetailContent: React.FC<Props> = (props) => {
  const { team } = props

  return (
    <>
      <Grid container spacing={4} maxWidth={800}>
        <R6SCard title={team.title} path={team.path} />
      </Grid>

      <HomeButton />
    </>
  )
}
