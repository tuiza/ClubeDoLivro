import styled from "styled-components/native";
import colors from "../../utils/colors";
import { Platform, StatusBar} from "react-native";

export const Container = styled.View`
    flex: 1;
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight  : 0}px; 
    // background-color: ${colors.secondury};
`

export const Title = styled.Text`
    color: ${colors.subtitle};
    font-size: 24px;
    text-align: center;
`



