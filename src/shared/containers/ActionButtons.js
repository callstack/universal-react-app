import React from 'react';
import ActionButton from 'shared/components/ActionButton';
import styled from 'styled-components/primitives';

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

const ButtonContent = styled.Text`
  margin: 0;
`;

const ActionButtons = ({ removeTodo, toggleTodo, id }) => {
  return (
    <Wrapper>
      <ActionButton onClick={() => { removeTodo(id); }}><ButtonContent>X</ButtonContent></ActionButton>
      <ActionButton onClick={() => { toggleTodo(id); }}><ButtonContent>O</ButtonContent></ActionButton>
    </Wrapper>);
};

export default ActionButtons;
