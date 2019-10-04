import React, { Component } from 'react';
import { auth } from '../../config/firebaseConfig'
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from '../common';
import LoginSocialMedia from './LoginSocialMedia'

class Login extends Component {
  static navigationOptions = {
    title: 'Login'
   };
   
  state = { 
      email: '', 
      password: '', 
      error: '', 
      loading: false 
    };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    auth.signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        auth.createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
      this.setState({
        email: '',
        password: '',
        error: '',
        loading: false
      });

      console.log('onLoginSuccess');      
    }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed.',
      loading: false
    });

    console.log('onLoginFail');
    
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Card>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
        </CardSection>
        <CardSection>
          <LoginSocialMedia />
        </CardSection>
      </Card>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email: "
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="********"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label="Password: "
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default Login;