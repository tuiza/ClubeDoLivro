import * as S from './styles'
// view é a div do native
import heart from '../../img/heart.png'
import welcome from '../../img/welcome.png'
import Button from '../../components/CardCategory/Button'

const Welcome = ({navigation}: any) => { //Componente
    //TS --> LÓGICA 

    return (
        <S.Container>
            <S.ContainerBook>
                <S.BookImg source={heart} />
            </S.ContainerBook>
            <S.WelcomeImg source={welcome} />
            <Button
                text={'Quero Participar'}
                onPress={() => navigation.navigate('Category')}
            />
            
        </S.Container>
    )

}

export default Welcome