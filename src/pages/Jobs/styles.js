import styled from 'styled-components/native';

const Container = styled.View`
    backgroundColor: #E8E8E8;
    width: 100%;
    height: 100%;
`;

const JobContainer = styled.View`
    backgroundColor: #fff;
    marginTop: 20px;
    marginBottom: 10px;
    width: 95%;
    height: 200px
    margin-left: auto;
    margin-right: auto;
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

export {
  Container, Title, JobContainer, JobTitle, JobSubtitle,
};
