//componentes estilizados
import styled from 'styled-components/native'
import colors from '../../utils/colors'
import { StatusBar, Platform } from 'react-native'

export const Container = styled.View`
    flex: 1;
    padding: 10px;
    align-items: center;
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight  : 0}px; 
    justify-content: center;
`

export const BookImg = styled.Image`
    margin-top: 8px;
`

export const WelcomeImg = styled.Image`
    margin-right: 40%;
`

export const ContainerBook = styled.View`
    width: 54px;
    height: 52px;
    border-radius: 10px;
    background-color: ${colors.icone};
    align-items: center;
    justify-content: center;
`
export const ContainerText = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: 600;
  color: ${colors.title};
`;
export const SubTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: ${colors.subtitle};
`;


