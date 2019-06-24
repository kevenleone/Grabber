import styled from 'styled-components/native';

const ProfileView = styled.View`
    background-color: #663096;
    height: 150px;
`;

const Username = styled.Text`
    color: #fff;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
`;

const Job = styled.Text`
    text-align: center;
    color: #fff;
    margin-top: 3px;
`;

const Avatar = styled.Image`
    margin: 15px 0px 10px;
    border-width: 1;
    border-color: rgba(0,0,0,0.2);
    align-self: center;
    width: 80;
    height: 80;
    background-color: #fff;
    border-radius: 40;
`;

export {
  ProfileView, Username, Avatar, Job,
};
