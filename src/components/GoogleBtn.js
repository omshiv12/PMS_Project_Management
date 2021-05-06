import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Base64 } from 'js-base64';


const CLIENT_ID = "1096547841187-67s33gua00bdrjl7dkpb0ag6hlpu8k25.apps.googleusercontent.com";



class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: '',
      name:'',
      ip1 : "192.168.1.11:5000",
     ip2 : "192.168.43.250:5000",
      email:'',
    };

    this.getData = this.getData.bind(this);
    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    
  }

  

  getData = () => {
    // const history = useHistory();
    let loginData = {
      "Name" : this.state.name,
      "Email" : this.state.email,
    };
    loginData = Base64.encode(JSON.stringify(loginData));
    fetch("http://"+this.state.ip1+"/login/employees/"+loginData)
    .then(result=>result.json())
    .then((resultJson) => {
      if(resultJson.status != "Success"){
        alert("This email id is not registered with us. Please ask your adminstration to add your email id to the company database.");
      }
      else{
        localStorage.setItem('login',true);
        localStorage.setItem('loginCredentials',JSON.stringify(resultJson.data));
        window.location.href="/dashboard";
        // history.push("/initialSetup");
      }
    })
  }


  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken
      }));
      const profile = response.profileObj;
      const name = profile.name;
      const email = profile.email;
      this.setState({name:name,email:email});
      if(this.state.accessToken){
        this.getData();
      }
      console.log(response);
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
  }

  handleLoginFailure (response) {
    // alert('Failed to log in')
    console.log(response);
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }

  render() {
    return (
    <div>
      { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        >
        </GoogleLogout>: <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='Login'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />
      }
      {/* { this.state.accessToken ? <h5>Your Access Token: <br/><br/> { this.state.accessToken }</h5> : null } */}

    </div>
    )
  }
}

export default GoogleBtn;
