import { Box, Card, Typography } from '@mui/material'
import Image from 'next/image'

interface Props {
  title: string
  path: string
}

export const R6SCard: React.FC<Props> = (props) => {
  const { path, title } = props

  const imgPath = `/logo/${path}.png`

  return (
    <Card sx={{ display: 'flex', alignItems: 'center' }}>
      <Image src={imgPath} width={150} height={150} />

      <Box sx={{ pr: 4 }}>
        <Typography variant="h5">{title}</Typography>
      </Box>
    </Card>
  )
}
