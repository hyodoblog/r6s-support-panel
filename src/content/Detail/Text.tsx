import { Box } from '@mui/material'

interface Props {
  title: string
}

export const Text: React.FC<Props> = (props) => {
  const { title } = props

  return (
    <Box className="electronic-board" display="flex">
      {title}
      <Box sx={{ px: 4 }} />
      がんばれ〜〜〜〜〜
    </Box>
  )
}
