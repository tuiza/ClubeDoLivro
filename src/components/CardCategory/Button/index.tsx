import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type ButtonProps = {
    text: string
} & TouchableOpacityProps


const Button = ({text, ...rest}: ButtonProps) => {
    return (
        <S.Button {...rest}>
            <S.Text>{text}</S.Text>
        </S.Button>
    )
};

export default Button;