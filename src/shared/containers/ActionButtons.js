import React from 'react';
import ActionButton from 'shared/components/ActionButton';
import View from 'shared/components/View';
import Text from 'shared/components/Text';

const Wrapper = View`
  display: flex;
  flex-direction: row;
`;

const ButtonContent = Text`
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
