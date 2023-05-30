import * as S from "./styles";
import Button from "../../components/CardCategory/Button";
import LoginInput from "../../components/CardCategory/LoginInput";
import login from "../../img/login.png";
const Login = ({navigation}: any) => {
    return (
        <S.Container>
            <S.BookContainer>
                <S.LoginImg source={login} />
            </S.BookContainer>
            <S.FormContainer>
            {/*     <S.ChoiceFormContainer>
                    <Button text="Login" />
                    <Button text="Cadastro"/>
                </S.ChoiceFormContainer> */}
                <LoginInput text="Email" />
                <LoginInput text="Senha" />
            </S.FormContainer>
            <Button text={"Entrar"} onPress={()=> navigation.navigate('Welcome')} />
        </S.Container>
    );
};

export default Login;