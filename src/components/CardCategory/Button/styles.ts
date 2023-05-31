import styled from "styled-components/native";
import colors from "../../../utils/colors";
import { TouchableOpacityProps } from "react-native";

type ButtonProps = {
  width?: number
  backgroundColor?: string
} & TouchableOpacityProps

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: ${({width})=> width}px;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  background-color: ${({backgroundColor})=> backgroundColor ?? colors.primary }
`

export const Text = styled.Text<{textColor?: string}>`
  font-weight: 500;
  font-size: 17px;
  line-height: 27px;
  text-align: center;
  color: ${({textColor})=> textColor ?? colors.white }
`

export const Icon = styled.Image``;