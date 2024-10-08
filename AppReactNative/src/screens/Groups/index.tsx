import { FlatList } from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import { useState, useCallback } from 'react';

import { Header } from '@components/Header';
import { Highlight } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import{ Container,} from './styles';
import { groupsGetAll } from '@storage/group/groupsGetAll';



export function Groups() {
  const [ groups, setGroups] = useState<string[]>([]);
  
  const navigation = useNavigation();
  
  function handleNewGroup(){
      navigation.navigate('new');
  }

  async function fetchGroups(){
    try{ 
      
    const data = await groupsGetAll();
     setGroups(data);
    }catch(error){
      console.error('Erro ao carregar grupos', error);
  }
}

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));
  
  return (
    <Container>
      <Header  />
      <Highlight 
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
        <GroupCard 
        title={item} 
        
        />
      )}
      contentContainerStyle={groups.length === 0  && { flex: 1}}
      ListEmptyComponent={() => (
      
      <ListEmpty message='Que tal cadastrar a primeira turma?' 
      />
  )}

      /> 

      <Button 
      title='Criar Nova Turma'
      onPress={handleNewGroup}
      />
    </Container>
  );
}


