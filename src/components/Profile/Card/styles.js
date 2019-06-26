import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ProfileView = styled(LinearGradient).attrs({
  colors: ['#134E5E', '#71B280'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
    height: 150px
`;

export const Username = styled.Text`
    color: #fff;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
`;

export const Job = styled.Text`
    text-align: center;
    color: #fff;
    margin-top: 3px;
`;

export const Avatar = styled.Image`
    margin: 15px 0px 10px;
    border-color: #fff;
    align-self: center;
    width: 80;
    height: 80;
    background-color: #fff;
    border-radius: 40;
`;
