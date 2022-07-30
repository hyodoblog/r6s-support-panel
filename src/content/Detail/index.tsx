import { Grid, Paper, styled } from '@mui/material'

import { R6SCard } from '~/components/R6SCard'
import { Team, teams } from '~/data/team'

interface Props {
  team: Team
}

export const DetailContent: React.FC<Props> = (props) => {
  const { team } = props

  return (
    <Grid container spacing={4} maxWidth={800}>
      <R6SCard title={team.title} path={team.path} />
    </Grid>
  )
}
