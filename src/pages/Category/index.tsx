import * as S from './styles'
import CardCategory from '../../components/CardCategory'
import ghost from '../../img/ghost.png'
import heart from '../../img/heart.png'
import biotech from '../../img/biotech.png'
import travel from '../../img/travel.png'
import cat from '../../img/cat.png'
import love from '../../img/love.png'
import Button from '../../components/CardCategory/Button'


const Category = ({navigation}: any) => {
    return (
        <S.Container>
            <Button
                text={'voltar'}
                onPress={
                    () => navigation.goBack()} />
            <S.Title>
                Selecione seus gêneros favoritos
            </S.Title>
            <S.CardContainer
                contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 43,
                    justifyContent: 'center',
                }}
            >
                <CardCategory
                    icon={ghost}
                    text={'terror'}
                />
                <CardCategory
                    icon={heart}
                    text={'romance'}
                />
                <CardCategory
                    icon={travel}
                    text={'aventura'}
                />
                <CardCategory
                    icon={biotech}
                    text={'ficção'}
                />
                <CardCategory
                    icon={cat}
                    text={'suspense'}
                />
                <CardCategory
                    icon={love}
                    text={'auto ajuda'}
                />
            </S.CardContainer>
            <Button
                text={'Concluir'}
                onPress={
                    () => navigation.navigate('Welcome')} />
        </S.Container>
    )
}

export default Category