import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
const Login = () => {

  const paperStyle = { padding: 20, height: '40vh', width: 280, margin: "auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '1rem 0' }
  return (
    <Grid style={{display:"flex", alignItems:"center", height:"100vh"}}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField label='Username' placeholder='Enter username' fullWidth required />
        <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
      </Paper>
    </Grid>
  )
}

export default Login