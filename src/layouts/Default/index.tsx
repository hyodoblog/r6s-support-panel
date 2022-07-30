import { Box } from '@mui/material'

interface Props {
  children: React.ReactNode
}

export const DefaultLayout: React.FC<Props> = (props) => {
  const { children } = props

  return (
    <Box
      sx={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%' }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  )
}
