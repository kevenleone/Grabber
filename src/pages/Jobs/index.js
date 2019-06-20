import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Header, Divider, Button,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  Container, JobTitle, JobContainer, JobSubtitle, JobDetails, JobQuestion, JobAnswer, JobQA,
} from './styles';

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      favorite: false,
    };
  }

  handleFavorite() {
    const { favorite } = this.state;
    this.setState({ favorite: !favorite });
  }

  handleUpdate() {
    alert('Haaaaa');
  }

  render() {
    const { favorite } = this.state;
    return (
      <Container>
        <Header
          containerStyle={{ backgroundColor: '#fff', justifyContent: 'space-around' }}
          centerComponent={{ text: 'Jobs', style: { color: '#000', fontSize: 20 } }}
          rightComponent={{ onPress: this.handleUpdate, icon: 'refresh', color: '#000' }}
        />
        <JobContainer>
          <Icon
            name={favorite ? 'ios-heart' : 'ios-heart-empty'}
            style={styles.IconFavorite}
            onPress={this.handleFavorite}
            size={30}
          />
          <JobTitle>Engenheiro Ambiental</JobTitle>
          <JobSubtitle>Recife/PE</JobSubtitle>
          <Divider style={styles.Divider} />
          <JobDetails>
            <JobQA>
              <Icon
                name="ios-paper"
                style={styles.JobDetailIcon}
                size={20}
              />
              <JobQuestion>
                Contrato
              </JobQuestion>
              <JobAnswer>Efetivo (CLT)</JobAnswer>
            </JobQA>
            <JobQA>
              <Icon
                name="ios-cash"
                style={styles.JobDetailIcon}
                size={20}
              />
              <JobQuestion>Salário</JobQuestion>
              <JobAnswer>4000</JobAnswer>
            </JobQA>
            <JobQA>
              <FontAwesome
                name="building"
                style={styles.JobDetailIcon}
                size={20}
              />
              <JobQuestion>Empresa</JobQuestion>
              <JobAnswer>Não Especificado</JobAnswer>
            </JobQA>
            <JobQA>
              <FontAwesome
                name="calendar"
                style={styles.JobDetailIcon}
                size={20}
              />
              <JobQuestion>Data Pub</JobQuestion>
              <JobAnswer>{new Date().toUTCString()}</JobAnswer>
            </JobQA>
          </JobDetails>
          <Divider />
          <Button
            type="clear"
            title="Exibir Detalhes"
          />
        </JobContainer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  IconFavorite: {
    margin: 10,
    color: 'red',
    position: 'absolute',
    right: 1,
  },
  JobDetailIcon: {
    textAlign: 'center',
    color: '#998',
    paddingLeft: 15,
  },
  Divider: {
    marginTop: 20,
  },
});
