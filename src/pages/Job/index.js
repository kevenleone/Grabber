import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Divider } from 'react-native-elements';
import {
  Container, Content, Title, Subtitle, Label, HeaderArea, LabelArea, QeA, Question, Answer, ContentHeader, Description,
} from './styles';


export default class index extends Component {
  static navigationOptions = {
    // header: null,
    headerTitle: 'Job',
  }

  render() {
    const { navigation } = this.props;
    const { title, city, job: { job, contract, salary } } = navigation.state.params;
    return (
      <Container>
        <Content>
          <FontAwesome
            name="twitter"
            style={styles.IconTheme}
            size={30}
          />
          <HeaderArea>
            <Title>{job}</Title>
            <Subtitle>{city}</Subtitle>
            <LabelArea>
              <Label>1d Ago</Label>
              <Label>1d Ago</Label>
            </LabelArea>
          </HeaderArea>
        </Content>

        <Content>
          <QeA>
            <Question>Type</Question>
            <Answer>{contract || 'Não Especificado'}</Answer>
          </QeA>
          <Divider />
          <QeA>
            <Question>Salary</Question>
            <Answer>{salary}</Answer>
          </QeA>
        </Content>

        <Content>
          <ContentHeader>Description</ContentHeader>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat diam efficitur nisl bibendum, nec fermentum mauris scelerisque. Cras mattis justo non laoreet consectetur. Phasellus id dictum ex. Donec lobortis cursus dui sit amet volutpat. Integer vel dui ullamcorper, laoreet tortor eget, sagittis ligula. Vestibulum quam orci, feugiat quis nisi at, gravida mollis metus. Sed eu odio sem. Sed non magna quis turpis varius lobortis. Mauris condimentum eu nisi ut rhoncus. Sed congue tincidunt efficitur.

            Suspendisse pulvinar nibh a leo feugiat, sit amet dictum orci mollis. Suspendisse suscipit et quam vel pellentesque. Ut laoreet nunc purus, a ultrices ante varius sit amet. Fusce feugiat rutrum convallis. Suspendisse consectetur a velit condimentum molestie.
          </Description>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  IconTheme: {
    position: 'absolute',
    padding: 20,
    marginTop: 10,
    color: 'lightblue',
  },
});
