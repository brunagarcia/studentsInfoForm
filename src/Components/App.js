import React, { Component } from 'react';
import { TextField, FormControl, Icon, Button } from '@material-ui/core/';
import firebase from '../client';
import logo from '../logo.svg';
import './App.css';
import InputAdornment from '@material-ui/core/InputAdornment';

class App extends Component {
  state = {
    msg:'',
    name:''
  };


  submitForm = (e) => {
    e.preventDefault();
    firebase.database().ref('students/' + e.target.name.value ).set({
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      linkedin: e.target.linkedin.value,
      github: e.target.github.value,
    })
    this.setState({
        msg: "Thanks for submiting your info",
        name: e.target.name.value
      })
    this.clearForm(e);  
  }

  clearForm = (e) => {
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
    e.target.linkedin.value = "";
    e.target.github.value = "";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to Brainstation</h1>
        </header>

        {/* To be hidden before submiting happens. */}
        <h4 className="thanksMsg"> {this.state.msg} {this.state.name} </h4> 

        {/* Form **************************************************************************** */}
        <form onSubmit={(e) => { this.submitForm(e) }}>
          <FormControl>
            <TextField
              id="name"
              label="Full Name"
              required="true"
              margin="normal"
              type="string"
              InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon>person</Icon>
                </InputAdornment>
              )
            }}/>

            <TextField
              id="email"
              label="Email"
              required="true"
              margin="normal"
              type="string"
              InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon>email</Icon>
                </InputAdornment>
              )
            }}/>

            <TextField
              id="phone"
              label="Phone Number"
              required="true"
              margin="dense"
              type="integer"
              InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon>phone</Icon>
                </InputAdornment>
              )
            }}/>

            <TextField
              id="linkedin"
              label="Linkedin"
              required = "true"
              margin="normal"
              type="string"
              InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img className="icons" src="/In-Black-14px.png" alt="linkedin"/>
                </InputAdornment>
              )
            }}/>
            <TextField
              id="github"
              name="github"
              required = "true"
              label="Github"
              margin="normal"
              type="string"
              InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img className="icons" src="/GitHub-Mark-32px.png" alt="github"/>
                </InputAdornment>
              )
            }}/>

            <Button type="submit" variant="outlined" color="primary">
              Submit
            </Button>

          </FormControl>
        </form>

      </div>
    );
  }
}

export default App;

