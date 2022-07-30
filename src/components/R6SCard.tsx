import { Box, Card, Typography } from '@mui/material'

interface Props {
  title: string
  path: string
}

export const R6SCard: React.FC<Props> = (props) => {
  const { path, title } = props

  const imgPath = `/logo/${path}.png`

  return (
    <Card sx={{ display: 'flex', alignItems: 'center' }}>
      <img src={imgPath} width={120} height={120} />

      <Box sx={{ p: 4 }}>
        <Typography variant="h6">{title}</Typography>
      </Box>
    </Card>
  )
}
