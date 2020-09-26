

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      value: ''
    };

    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler = (event) => {
    this.state[event.target.name] = event.target.value
    console.log(event.target.name)
    console.log(event.target.value)
  }

  submitHandler = (event) => {
    const url = `http://127.0.0.1:5000/add/${this.state.num1}/${this.state.num2}`
    console.log(`api call: ${url}`)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.answer)
        this.setState({ value: data.answer});
    });
  };

  render() {
    return <Calculator value={this.state.value} onChange={this.changeHandler} onSubmit={this.submitHandler} />;
  }
}

function Calculator({value, onChange, onSubmit}) {

    const classes = useStyles();

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Add Me
            </Typography>

            <TextField
              variant="outlined"
              margin="normal"
              required
              id="num1"
              label="First Number"
              name="num1"
              autoFocus
              onChange={onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="num2"
              label="Second Number"
              name="num2"
              autoFocus
              onChange={onChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onSubmit}
            >
              Calculate!
            </Button>
            <Typography component="h1" variant="h5">
              Answer: {value}
            </Typography>
          </div>
      </Container>

      // <Container component="main" maxWidth="xs">
      //   <CssBaseline />
      //   <div className={classes.paper}>
      //     <Avatar className={classes.avatar}>
      //       <LockOutlinedIcon />
      //     </Avatar>
      //     <Typography component="h1" variant="h5">
      //       Sign in
      //     </Typography>
      //     <form className={classes.form} noValidate>
      //       <TextField
      //         variant="outlined"
      //         margin="normal"
      //         required
      //         fullWidth
      //         id="email"
      //         label="Email Address"
      //         name="email"
      //         autoComplete="email"
      //         autoFocus
      //       />
      //       <TextField
      //         variant="outlined"
      //         margin="normal"
      //         required
      //         fullWidth
      //         name="password"
      //         label="Password"
      //         type="password"
      //         id="password"
      //         autoComplete="current-password"
      //       />
      //       <FormControlLabel
      //         control={<Checkbox value="remember" color="primary" />}
      //         label="Remember me"
      //       />
      //       <Button
      //         type="submit"
      //         fullWidth
      //         variant="contained"
      //         color="primary"
      //         className={classes.submit}
      //       >
      //         Sign In
      //       </Button>
      //       <Grid container>
      //         <Grid item xs>
      //           <Link href="#" variant="body2">
      //             Forgot password?
      //           </Link>
      //         </Grid>
      //         <Grid item>
      //           <Link href="#" variant="body2">
      //             {"Don't have an account? Sign Up"}
      //           </Link>
      //         </Grid>
      //       </Grid>
      //     </form>
      //   </div>
      // </Container>
    );
  
}

export default App;
