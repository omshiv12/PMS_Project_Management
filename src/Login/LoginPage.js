import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router';
import { Base64 } from 'js-base64';
import GoogleBtn from '../components/GoogleBtn';





const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();

  const [user,setUser] = React.useState('');
  const [pass,setPass] = React.useState('');

  const ip1 = "192.168.1.11:5000";
  const ip2 = "192.168.43.250:5000";

  const login = () =>{
    let data = {
      Email: user,
      Password: pass,
    };
    data = Base64.encode(JSON.stringify(data));
    fetch('http://'+ip1+'/login/userLogin/'+data)
    .then(result => result.json())
    .then(resultJson => {
      if(resultJson.status == "Success"){
        localStorage.setItem('login',true);
        console.log(resultJson.data);
        
        localStorage.setItem('loginCredentials',JSON.stringify(resultJson.data));
        if(resultJson.data['0']['Setup'] == "Done"){
          window.location.href = "/dashboard";
        }
        else
          window.location.href = "/initialSetup";
      }
      else{
        alert("Plese enter correct credentials.");
      }
    })

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography  variant="h5">
            Login
        </Typography>
        <form className={classes.form} noValidate>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value = {user}
            onChange = {(v) => {setUser(v.target.value)}}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value = {pass}
            onChange = {(v) => {setPass(v.target.value)}}
          />

          <Button
            fullWidth
            type="button"
            variant="contained"
            style={{backgroundColor:"rgb(3, 4, 94)",color:"white"}}
            className={classes.submit}
            onClick = {login}
          >
            Login
          </Button>

          <GoogleBtn/>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>

              <Button onClick={()=>{history.push("/join")}} variant="body2">
                {"Don't have an account? Sign Up"}
              </Button> 
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}