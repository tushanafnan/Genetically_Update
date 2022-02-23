import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';
import { UserContext } from '../Context/Context';
import { withFirebase } from '../Firebase';



 
const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };
 
class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
  static contextType = UserContext;

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    let {setUser} = this.context; 
    let { from } = this.props.location?.state?.from?.pathname || { from: { pathname: ROUTES.Home } };
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(response => {
        // if you want userData save to localStorage please use below function
        localStorage.setItem('user', JSON.stringify(response.user.uid));
        setUser(response.user)
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(from);
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  }
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  
 
  render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;

      const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
      console.log("location", this.props);
      return (
        <Form onSubmit={this.onSubmit}>
          <input
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
          />
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
         <button disabled={isInvalid} type="submit">
          Sign Up
         </button>
   
          {error && <p>{error.message}</p>}
        </Form>
    );
  }
}
 
const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
  )(SignUpFormBase);
  
export default SignUpPage;
 
export { SignUpForm, SignUpLink };

