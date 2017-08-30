import React from 'react';
import ActionButtons from 'shared/containers/ActionButtons';
import styled from 'styled-components/primitives';

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 0 2%;
`;

const Title = styled.Text`
  font-size: 16px;
  flex-grow: 1;
`;

export default ({ text, id }) => <Wrapper><Title>{text}</Title><ActionButtons id={id}/></Wrapper>
