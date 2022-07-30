import { Box, Card, Typography } from '@mui/material'
import Link from 'next/link'

interface Props {
  title: string
  path: string
}

export const R6SCard: React.FC<Props> = (props) => {
  const { path, title } = props

  const href = `/${path}`
  const imgPath = `/logo/${path}.png`

  return (
    <Link href={href} style={{ cursor: 'pointer' }}>
      <a>
        <Card sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={imgPath} width={120} height={120} />

          <Box sx={{ p: 4 }}>
            <Typography variant="h6">{title}</Typography>
          </Box>
        </Card>
      </a>
    </Link>
  )
}
