import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-primitives';
import { add } from 'shared/actions/todo';
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
  margin: 0;
`

class AddTodo extends Component {
  state = {
    text: '',
  };

  onChangeText = (text) => {
    this.setState({ text });
  };

  onAdd = () => {
    if (!!this.state.text) {
      this.props.onAdd(this.state.text);
      this.setState({ text: '' });
    }
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

export default connect(null, (dispatch) => ({
  onAdd: (text) => { dispatch(add(text)); },
}))(AddTodo);
