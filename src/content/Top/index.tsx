import { Grid, styled, Paper } from '@mui/material'
import { R6SCard } from '~/components/R6SCard'

interface Team {
  title: string
  path: string
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

export const TopContent: React.FC = () => {
  const teams: Team[] = [
    {
      title: 'Crest Gaming Lst',
      path: 'CGL'
    },
    {
      title: 'CYCLOPS athlete gaming OSAKA',
      path: 'CAG'
    },
    // {
    //   title: 'DONUTS USG',
    //   path: 'USG'
    // },
    {
      title: 'FAV gaming',
      path: 'FAV'
    },
    {
      title: 'FNATIC',
      path: 'FNATIC'
    },
    // {
    //   title: 'IGZIST',
    //   path: 'IGZIST'
    // },
    {
      title: 'KAWASAKI SCARZ',
      path: 'SCARZ'
    },
    // {
    //   title: 'PSG Esports',
    //   path: 'PSG'
    // },
    {
      title: 'REJECT',
      path: 'REJECT'
    }
    // {
    //   title: 'Sengoku Gaming',
    //   path: 'SG'
    // }
  ]

  return (
    <Grid container spacing={4} maxWidth={800}>
      {teams.map((team, index) => (
        <Grid item xs={6} key={index}>
          <Item>
            <R6SCard title={team.title} path={team.path} />
          </Item>
        </Grid>
      ))}
    </Grid>
  )
}
