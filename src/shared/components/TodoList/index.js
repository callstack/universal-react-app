import React from 'react';
import styled from 'styled-components';
import TodoItem from 'shared/components/TodoItem';

const List = styled.ul`
  flex: 1;
  margin: 0;
  list-style-type: none;
  padding: 0;
`;

const renderItem = ({ id, text }) => (<li key={id}><TodoItem id={id} text={text} /></li>);

export default ({ todos }) => (<List>{todos.map(renderItem)}</List>);
