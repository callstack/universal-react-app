import React from 'react';
import styled from 'styled-primitives';
import AddTodo from 'shared/containers/AddTodo';
import TodoList from 'shared/components/TodoList';


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

const TodoScreen = ({ title, todos }) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <AddTodo />
      <TodoList todos={todos} />
    </Wrapper>);
};

export default TodoScreen;
