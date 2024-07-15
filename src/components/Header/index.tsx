import { Container, Logo, BtnVoltar, BackButton } from "./style";
import logoImg from '@assets/logo.png';

type Props = {
    showBackButton?: boolean;
}

export function Header({showBackButton = false}: Props){
    return (
        <Container>
            {
            showBackButton &&

            <BackButton > 
            <BtnVoltar />  
            </BackButton>
            }

        <Logo source={logoImg}/>
        </Container>
    )
}