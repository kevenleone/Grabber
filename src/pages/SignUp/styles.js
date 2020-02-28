import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#71B280', '#134E5E'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
    flex: 1;
`;

export const LoginArea = styled.View`
    align-self: center;
    margin-top: 150px;
`;

export const SimpleText = styled.Text`
    color: #fff;
    font-size: 17px;
`;

export const SignUpLink = styled.TouchableOpacity`
    margin-top: 20px;
    margin-left: 12px;
    flexDirection: row;
    align-self: center;
`;

export const SignUpText = styled.Text`
    font-size: 17px;
    margin-left: 3px;
    color: #71B280;
    font-weight: bold;
`;

export const LogoImage = styled.Image`
    align-self: center;
    margin-top: 180px;
    position: absolute;
    width: 80px;
    height: 80px;
`;

export const Logo = styled.Text`
    font-size: 50px;
    color: #fff;
    font-weight: bold;
    margin-top: 100px
    align-self: center;
`;

export const Input = styled.TextInput`
    font-size: 17px;
    background-color: #fff;
    padding: 15px;
    border-radius: 5px;
    width: 300px;
    margin-bottom: 20px
`;

export const Button = styled.TouchableOpacity`
    margin-top: 10px;
    padding: 15px;
    background-color: #333;
    border-radius: 5px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`;
