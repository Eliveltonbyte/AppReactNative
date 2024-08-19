import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/HighLight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import {useState} from "react";

export function NewGroups(){

    const [group, setGroup] = useState('');
   
    const navigation = useNavigation();

    function handleNew(){
        navigation.navigate('players', {group});
    }
    return (
        <Container>

            <Header showBackButton />

            <Content>
                <Icon/>
                <Highlight 
                    title="Nova Turma"
                    subtitle="Cria uma turma para adicionar pessoas"    

                />
                 
                <Input
                    placeholder="Nome da Turma"
                    onChangeText={setGroup}
                />


                <Button 
                    title="Criar"
                    style={{marginTop: 10}}
                    onPress={handleNew}
                />
            </Content>
        </Container>
    )
}