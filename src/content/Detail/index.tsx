import { Box, Grid } from '@mui/material'

import type { Team } from '~/data/team'
import { getImgPathByPath } from '~/data/team'

import { HomeButton } from './HomeButton'
import { Text } from './Text'

interface Props {
  team: Team
}

export const DetailContent: React.FC<Props> = (props) => {
  const { team } = props

  const imgPath = getImgPathByPath(team.path)

  return (
    <>
      <Grid container spacing={4} maxWidth={1200}>
        <Grid item xs={12}>
          <img src={imgPath} width={150} height={150} style={{ margin: 'auto' }} />
        </Grid>

        <Grid item xs={12} sx={{ pb: 12 }}>
          <Text title={team.title} />
        </Grid>
      </Grid>

      <HomeButton />
    </>
  )
}
