import { Box } from '@mui/material'
import { useEffect } from 'react'

interface Props {
  title: string
}

export const Text: React.FC<Props> = (props) => {
  const { title } = props
  const spanList: React.ReactNode[] = []
  const maxLength = title.length

  for (let i = 0; i < maxLength; i++) {
    spanList.push(<span>{title[i]}</span>)
  }

  const animation = () => {
    const element = document.getElementById('animation')
    element!.className = ''
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        element!.className = 'animate seven'
      })
    })
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      animation()
    }, 3000)

    return () => {
      timerId && clearInterval(timerId)
    }
  }, [])

  return (
    <Box display="flex" justifyContent="center" sx={{ whiteSpace: 'nowrap' }}>
      <div id="animation" className="animate seven">
        {spanList}
        &nbsp;
        <span>W</span>
        <span>I</span>
        <span>N</span>
      </div>
    </Box>
  )
}
