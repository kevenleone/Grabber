import styled from 'styled-components/native';

const Container = styled.ScrollView`
    backgroundColor: #E8E8E8;
    width: 100%;
    height: 100%;
`;

const JobQuestion = styled.Text`
    margin-top: 2px;
    margin-left: 5px;
    width: 80px;
`;

const JobAnswer = styled.Text`
    margin-top: 2px;

`;

const JobQA = styled.View`
    flexDirection: row;
    flexWrap: wrap;
    marginTop: 10px;
`;


const JobDetails = styled.View`
    backgroundColor: rgba(232, 232, 232, 0.21);
    marginBottom: 10px;
`;

const JobContainer = styled.View`
    backgroundColor: #fff;
    marginTop: 10px;
    marginBottom: 10px;
    width: 95%;
    height: 255px
    margin-left: auto;
    margin-right: auto;
    borderRadius: 10;
`;

const JobTitle = styled.Text`
    padding: 10px;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
`;

const JobSubtitle = styled.Text`
    margin-top: 1px;
    font-size: 15px;
    text-align: center;
`;

const Title = styled.Text`
    padding: 20px;
`;

const JobDescription = styled.Text`
    padding: 20px;
    overflow: hidden;
`;

export {
  Container, Title, JobContainer, JobTitle, JobSubtitle, JobDescription, JobDetails, JobQuestion, JobAnswer, JobQA,
};
