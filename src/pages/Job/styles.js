import styled from 'styled-components/native';

const Container = styled.ScrollView`
    background-color: #E8E8E8;
    width: 100%;
    height: 100%;
`;

const HeaderArea = styled.View`
    padding: 20px;
    margin-left: 40px;
`;

const Content = styled.View`
    margin-bottom: 15px;
    background-color: #fff;
    height: auto;
`;

const Title = styled.Text`
    font-weight: bold;
    font-size: 16px;
    padding: 2px 0px 5px;
`;

const Subtitle = styled.Text`
    color: #696969;
    font-weight: bold;
`;

const LabelArea = styled.View`
    flexDirection: row;
`;

const Label = styled.Text`
    color: #696969;
    font-weight: bold;
    padding: 10px 30px 0px 0px;
`;

const QeA = styled.View`
    flexDirection: row;
    height: 30px;
    margin: 10px 10px 0px 10px;
`;

const Question = styled.Text`
    font-weight: bold;
    font-size: 16px;
    left: 1;
    position: absolute;
`;

const Answer = styled.Text`
    right: 1;
    color: #696969
    position: absolute;
`;

const ContentHeader = styled.Text`
    padding: 10px;
    font-weight: bold;
`;

const Description = styled.Text`
    padding: 10px;
    text-align: justify;
    color: #696969;
`;


export {
  Container, Content, Title, Subtitle, Label, HeaderArea, LabelArea, QeA, Question, Answer, ContentHeader, Description,
};
