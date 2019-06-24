import React, { Component } from 'react';
import {
  ProfileView, Username, Avatar, Job,
} from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class index extends Component {
  render() {
    return (
      <ProfileView>
        <Avatar source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZtZg49eqkFchNquirB_L84ouEJk3G3-e3b6bw0QfWrl0rm6A7zw' }} />
        <Username> Unknown User  </Username>
        <Job> Singer </Job>
      </ProfileView>
    );
  }
}
