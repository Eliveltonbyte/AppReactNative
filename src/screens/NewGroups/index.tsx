import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/HighLight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroups(){
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
                />


                <Button 
                    title="Criar"
                    style={{marginTop: 10}}
                />
            </Content>
        </Container>
    )
}