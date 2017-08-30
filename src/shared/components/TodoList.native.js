import React from 'react';
import styled from 'styled-components/native';
import TodoItem from 'shared/components/TodoItem';

const List = styled.FlatList`
  flex: 1;
`

const renderItem = ({ item: { id, text } }) => (<TodoItem id={id} text={text} />)

export default ({ todos }) =>
  (<List data={todos} renderItem={renderItem} keyExtractor={({ id }) => id} />)
