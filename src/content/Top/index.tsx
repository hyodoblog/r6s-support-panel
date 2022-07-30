import { Grid, Paper, styled } from '@mui/material'

import { R6SCard } from '~/components/R6SCard'
import { teams } from '~/data/team'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

export const TopContent: React.FC = () => {
  return (
    <Grid container spacing={4} maxWidth={800}>
      {teams.map((team, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Item>
            <R6SCard title={team.title} path={team.path} />
          </Item>
        </Grid>
      ))}
    </Grid>
  )
}
