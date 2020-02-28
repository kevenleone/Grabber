import React, { Component } from 'react';
import {
  Container, Logo, Button, Input, LoginArea, ButtonText, LogoImage, SimpleText, SignUpLink, SignUpText,
} from './styles';

export default class index extends Component {
    static navigationOptions = {
      header: null,
    }

    render() {
      const { navigation: { goBack } } = this.props;

      return (
        <Container>
          <Logo> Grabber </Logo>
          <LogoImage source={require('../../assets/grab.png')} />
          <LoginArea>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Button>
              <ButtonText> Sign Up </ButtonText>
            </Button>
            <SignUpLink onPress={() => goBack()}>
              <SimpleText>Already registred ?</SimpleText>
              <SignUpText>Click here</SignUpText>
            </SignUpLink>
          </LoginArea>
        </Container>
      );
    }
}
