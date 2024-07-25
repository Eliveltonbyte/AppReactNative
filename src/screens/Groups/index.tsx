import { Header } from '@components/Header';
import{ Container,} from './styles';
import { Highlight } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';

export function Groups() {
  return (
    <Container>
      <Header  />
      <Highlight 
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />
      <GroupCard title='Galera da Desgraça'/>
    </Container>
  );
}


