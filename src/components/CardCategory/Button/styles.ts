import styled from "styled-components/native";
import colors from "../../../utils/colors";

export const Button = styled.TouchableOpacity`
  width: 280px;
  height: 52px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
    background-color: ${colors.primary};
`

export const Text = styled.Text`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
 
`

export const Icon = styled.Image``;