import * as S from './styles'
import CardCategory from '../../components/Category'

const Category = () => {
    return (
        <S.Container>
            <S.Title>
                Selecione seus gêneros favoritos
            </S.Title>
            <CardCategory/>
        </S.Container>
    )
}

export default Category