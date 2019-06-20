import React, { Component } from 'react';
import {
  Header,
} from 'react-native-elements';

import {
  Container, JobTitle, JobContainer, JobSubtitle,
} from './styles';

export default class index extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // console.log('oi');
  }

  handleUpdate() {
    alert('Haaaaa');
  }

  render() {
    return (
      <Container>
        <Header
          // eslint-disable-next-line react-native/no-inline-styles
          containerStyle={{ backgroundColor: '#fff', justifyContent: 'space-around' }}
          centerComponent={{ text: 'Jobs', style: { color: '#000', fontSize: 20 } }}
          rightComponent={{ onPress: this.handleUpdate, icon: 'refresh', color: '#000' }}
        />
        <JobContainer>
          <JobTitle>Engenheiro Ambiental</JobTitle>
          <JobSubtitle>Recife/PE</JobSubtitle>
        </JobContainer>
      </Container>
    );
  }
}
