import styled from 'styled-components/native';

const JobQuestion = styled.Text`
    margin-top: 2px;
    margin-left: 5px;
    width: 80px;
`;

const JobAnswer = styled.Text`
    margin-top: 2px;
    font-weight: bold;
    color: #696969;
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
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
    font-weight: bold;
`;

const JobSubtitle = styled.Text`
    margin-top: 1px;
    font-size: 15px;
    color: #696969;
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
  Title, JobContainer, JobTitle, JobSubtitle, JobDescription, JobDetails, JobQuestion, JobAnswer, JobQA,
};
