import { createTheme } from '@mui/material/styles'

export const themeColor = {
  primary: '#9f0000',
  secondary: '#1A2027',
  background: '#000000',
  card: '#1C1C1E',
  navi: '#37373A',
  error: '#EB4E3F'
}

export const theme = createTheme({
  spacing: 4,
  palette: {
    mode: 'dark',
    primary: {
      main: themeColor.primary
    },
    secondary: {
      main: themeColor.secondary
    },
    info: {
      main: themeColor.card
    },
    error: {
      main: themeColor.error
    }
  },
  typography: {
    fontFamily: 'Noto Sans JP, Poppins'
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginTop: 6,
          marginBottom: 10,
          borderColor: themeColor.background,
          width: '100%',
          '& .MuiInputBase-root': {
            backgroundColor: themeColor.secondary,
            borderRadius: 12
          },
          '& .MuiFormHelperText-root': {
            backgroundColor: themeColor.card,
            fontWeight: 'bold'
          }
        }
      }
    }
  }
})
