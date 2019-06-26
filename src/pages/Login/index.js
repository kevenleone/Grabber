import React, { Component } from 'react';
import {
  Container, Logo, Button, Input, LoginArea, ButtonText, LogoImage, SimpleText, SignUpLink, SignUpText,
} from './styles';

export default class index extends Component {
    static navigationOptions = {
      header: null,
    }

    render() {
      return (
        <Container>
          <Logo> Grabber </Logo>
          <LogoImage source={require('../../assets/grab.png')} />
          <LoginArea>
            <Input placeholder="User ID" />
            <Input placeholder="Password" />
            <Button>
              <ButtonText> Sign In </ButtonText>
            </Button>
            <SignUpLink>
              <SimpleText>Don't have an account ?</SimpleText>
              <SignUpText>Click here</SignUpText>
            </SignUpLink>
          </LoginArea>
        </Container>
      );
    }
}
