import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    padding: 30,
    display: 'inline-block',
    textAlign: 'center',
    width: '100%',
  },
  todo: {
    width: '100%',
    maxWidth: 1200,
    backgroundColor: theme.palette.background.paper,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  indexTodo: {
    marginRight: 10,
  },
  buttonTodo: {
    margin: theme.spacing(1),
  },
  todoDone: {
    textDecoration: 'line-through',
    color: 'grey',
    fontStyle: 'italic',
  },
  tasksCount: {
    textAlign: 'center',
  },
  todoList: {
    margin: 'auto',
    width: '60%',
    paddingTop: 50,
  },
  radioButtons: {
    display: 'inline-block',
    textAlign: 'center',
    width: '100%',
  },
  editButton: {
    backgroundColor: '#e3ac26',
    marginLeft: 20,
    margin: theme.spacing(1),
  },
}))

export default useStyles
