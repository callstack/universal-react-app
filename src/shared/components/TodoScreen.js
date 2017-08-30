import React from 'react';
import styled from 'styled-components/primitives';
import AddTodo from 'shared/containers/AddTodo';

const Wrapper = styled.View`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Header = styled.Text`
  font-size: 20px;
  text-align: center;
`;

const TodoScreen = ({ title, children }) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <AddTodo />
      {children}
    </Wrapper>);
};

export default TodoScreen;
