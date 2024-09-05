import { useNavigation } from "@react-navigation/native";
import { Container, Logo, BtnVoltar, BackButton } from "./style";
import logoImg from '@assets/logo.png';

type Props = {
    showBackButton?: boolean;
}

export function Header({showBackButton = false}: Props){

    const navigation = useNavigation();

    function handlleGoBack(){
        navigation.navigate('groups');
    }


    return (
        <Container>
            {
            showBackButton &&

            <BackButton  onPress={handlleGoBack}> 
            <BtnVoltar />  
            </BackButton>
            }

        <Logo source={logoImg}/>
        </Container>
    )
}