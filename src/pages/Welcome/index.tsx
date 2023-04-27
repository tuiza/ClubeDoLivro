import * as S from './styles'
// view é a div do native
import heart from '../../img/heart.png'
import welcome from '../../img/welcome.png'

const Welcome = () => { //Componente
    //TS --> LÓGICA 

    return (
        <S.Container>
            <S.ContainerBook>
                <S.BookImg source={heart} />
            </S.ContainerBook>
            <S.WelcomeImg source={welcome}/>
        </S.Container>
    )

}

export default Welcome