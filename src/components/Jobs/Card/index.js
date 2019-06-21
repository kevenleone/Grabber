import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  JobTitle, JobContainer, JobSubtitle, JobDetails, JobQuestion, JobAnswer, JobQA,
} from './styles';

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      favorite: false,
    };
  }

  componentDidMount() {
    console.tron.log(this.props);
  }

  handleFavorite() {
    const { favorite } = this.state;
    this.setState({ favorite: !favorite });
  }

  render() {
    const { favorite } = this.state;
    return (
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
          onPress={() => this.props.navigation.navigate('Job')}
        />
      </JobContainer>
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
