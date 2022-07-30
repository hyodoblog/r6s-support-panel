import { Grid } from '@mui/material'

import type { Team } from '~/data/team'

import { HomeButton } from './HomeButton'
import { Text } from './Text'

interface Props {
  team: Team
}

export const DetailContent: React.FC<Props> = (props) => {
  const { team } = props

  return (
    <>
      <Grid container spacing={4} maxWidth={1200}>
        <Grid item xs={12}>
          <Text title={team.title} />
        </Grid>
      </Grid>

      <HomeButton />
    </>
  )
}
