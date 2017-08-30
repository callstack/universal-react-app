import React, { Component } from 'react';
import styled from 'styled-components/primitives';
import AddTodoInput from 'shared/components/AddTodoInput';
import ActionButton from 'shared/components/ActionButton';

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  padding: 5px 2%;
  margin-top: 5px;
`;

const ButtonContent = styled.Text`
  color: #00FF00;
`

class AddTodo extends Component {
  state = {
    text: '',
  };

  onChangeText = (text) => {
    this.setState({ text });
  };

  onAdd = () => {
    this.props.onAdd(this.state.text);
  };

  render() {
    return (
      <Wrapper>
        <AddTodoInput
          onChangeText={this.onChangeText}
          value={this.state.text}
        />
        <ActionButton onClick={this.onAdd}>
          <ButtonContent>+</ButtonContent>
        </ActionButton>
      </Wrapper>
    );
  };
};

export default AddTodo;
