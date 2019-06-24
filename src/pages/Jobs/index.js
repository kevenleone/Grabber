import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import JobCard from '~/components/Jobs/Card';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Container } from './styles';

class Jobs extends Component {
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

const JobsQuery = gql`
query{
  Jobs {
    title
    date
    city
    company {
      name
      logo
    }
    job {
      career
      job
      contract
      apply
      salary
    }
  }
}
`;

export default graphql(JobsQuery, {
  name: 'jobs',
})(Jobs);

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
