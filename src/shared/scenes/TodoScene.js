import React from 'react';
import styled from 'styled-primitives';
import { connect } from 'react-redux';
import { getFiltered } from 'shared/selectors/todo';
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

const TodoScene = ({ title, todos }) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <AddTodo />
      <TodoList todos={todos} />
    </Wrapper>);
};

export default connect((state) => ({
  todos: getFiltered(state),
}))(TodoScene);
