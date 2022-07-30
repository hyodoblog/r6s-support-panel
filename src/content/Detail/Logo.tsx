import { Box } from '@mui/material'

import { getImgPathByPath } from '~/data/team'

interface Props {
  path: string
}

export const Logo: React.FC<Props> = (props) => {
  const { path } = props

  const imgPath = getImgPathByPath(path)

  return (
    <Box>
      <img
        src={imgPath}
        width={150}
        height={150}
        style={{ margin: 'auto', borderRadius: '50%', background: '#1e1e1e', padding: 4 }}
      />
    </Box>
  )
}
