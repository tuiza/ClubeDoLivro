import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type ButtonProps = {
    text: string
    width?: number
    backgroundColor?: string
    textColor?: string
} & TouchableOpacityProps

const Button = ({ text, width = 280, backgroundColor, textColor, ...rest }: ButtonProps) => {
    console.log(backgroundColor)
    return (
        <S.Button width={width} backgroundColor={backgroundColor} {...rest}>
            <S.Text textColor={textColor}>{text}</S.Text>
        </S.Button>
    )
};

export default Button;