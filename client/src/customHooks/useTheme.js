import { createMuiTheme } from '@material-ui/core/styles'

const useTheme = createMuiTheme({
  typography: {
    subtitle1: {
      fontStyle: 'italic',
      color: 'grey',
    },
  },
})

export default useTheme
