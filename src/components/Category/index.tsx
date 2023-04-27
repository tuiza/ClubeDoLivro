import * as S from './styles'
import ghost from '../../img/ghost.png'

const Category = () => {
    //props: icone e text
    // lógica do clique e estilo
    return (
        <S.CardCategory>
            <S.Circle>
                <S.Icon source={ghost} />
            </S.Circle>
            <S.Text>Terror</S.Text>
        </S.CardCategory>
    )
}

export default Category