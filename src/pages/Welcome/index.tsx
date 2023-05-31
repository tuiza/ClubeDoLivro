import * as S from './styles'
import heart from '../../img/heart.png'
import welcome from '../../img/welcome.png'
import Button from '../../components/CardCategory/Button'

const Welcome = ({navigation}: any) => {
    return (
        <S.Container>
            <S.ContainerBook>
                <S.BookImg source={heart} />
            </S.ContainerBook>
            <S.WelcomeImg source={welcome} />
            <S.ContainerText>
                <S.Title>Clube do Livro</S.Title>
                <S.SubTitle>
                    Conecte-se com pessoas de diversos lugares do mundo.
                </S.SubTitle>
            </S.ContainerText>
            <Button
                text={'Quero Participar'}
                onPress={() => navigation.navigate('Category')}
            />
            
        </S.Container>
    )

}

export default Welcome