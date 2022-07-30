import HomeIcon from '@mui/icons-material/Home'
import { Fab } from '@mui/material'
import Link from 'next/link'

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16
}

export const HomeButton: React.FC = () => {
  return (
    <Fab sx={fabStyle} aria-label="ホーム" color="secondary">
      <Link href="/">
        <HomeIcon />
      </Link>
    </Fab>
  )
}
