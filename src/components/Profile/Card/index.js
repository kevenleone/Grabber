import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  ProfileView, Username, Avatar, Job,
} from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class index extends Component {
  render() {
    return (
      <ProfileView>
        <Avatar source={{ uri: 'https://scontent.frec6-1.fna.fbcdn.net/v/t1.0-9/36786459_1749262405193539_5873717314603450368_n.jpg?_nc_cat=107&_nc_oc=AQmqWSKVmAQyLa2khzI7B-HTrQfqMHyI3W0eQjV4voUpoh3fEOJQburPrTK9o39ofo4&_nc_ht=scontent.frec6-1.fna&oh=bb498b8a539a03f318418e708b1bbf1c&oe=5DC4C230' }} />
        <Username> Débora Thaíse  </Username>
        <Job> Cirurgiã Dentista </Job>
      </ProfileView>
    );
  }
}
