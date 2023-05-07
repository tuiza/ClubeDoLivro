import { ImageSourcePropType } from 'react-native';
import * as S from './styles'

type CardCategoryProps = {
    icon: ImageSourcePropType;
    text: string;
}

const CardCategory = ({ icon, text }: CardCategoryProps) => {
   return (
       <S.CardCategory>
            <S.Circle>
                <S.Icon source={icon} />
            </S.Circle>
            <S.Text>{text}</S.Text>
        </S.CardCategory>
    )
}

export default CardCategory