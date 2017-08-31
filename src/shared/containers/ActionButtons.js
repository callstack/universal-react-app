import React from 'react';
import { connect } from 'react-redux';
import ActionButton from 'shared/components/ActionButton';
import styled from 'styled-primitives';
import { remove, toggle } from 'shared/actions/todo';

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

const ButtonContent = styled.Text`
  margin: 0;
`;

const ActionButtons = ({ onRemove, onToggle, id }) => {
  return (
    <Wrapper>
      <ActionButton onClick={() => { onRemove(id); }}><ButtonContent>X</ButtonContent></ActionButton>
      <ActionButton onClick={() => { onToggle(id); }}><ButtonContent>O</ButtonContent></ActionButton>
    </Wrapper>);
};

export default connect(null, (dispatch) => ({
  onRemove: (id) => { dispatch(remove(id)); },
  onToggle: (id) => { dispatch(toggle(id)); },
}))(ActionButtons);
