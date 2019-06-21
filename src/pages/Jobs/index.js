import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { Container } from './styles';
import JobCard from '~/components/Jobs/Card';

export default class index extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  handleUpdate() {
    alert('Haaaaa');
  }

  render() {
    return (
      <Container>
        {/* <Header
          containerStyle={styles.HeaderContainer}
          centerComponent={{ text: 'Jobs', style: styles.HeaderCenterStyle }}
          rightComponent={{ onPress: this.handleUpdate, icon: 'refresh', color: '#000' }}
        /> */}
        <JobCard {...this.props} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  },
  HeaderCenterStyle: {
    color: '#000',
    fontSize: 20,
  },
});
