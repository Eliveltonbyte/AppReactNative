import styled from "styled-components/native";
import {CaretLeft} from 'phosphor-react-native'

export const Container = styled.View`
width: 100%;

flex-direction: row;
justify-content: center;
align-items: center;

`;

export const Logo = styled.Image`
 width: 60px;
 height: 75px;

`;

export const BackButton = styled.TouchableOpacity`
flex: 1;
`;
export const BtnVoltar = styled(CaretLeft).attrs(({theme}) =>({
    size: 32,
    color: theme.COLORS.WHITE,
 
}))`

`;